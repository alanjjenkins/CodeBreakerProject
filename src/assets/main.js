let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');
let message = document.getElementById('message');
let results = document.getElementById('results');
let code = document.getElementById('code');

function guess() {
    let input = document.getElementById('user-guess');
    if (! validateInput(input.value)) {
        return false;
    } else {
        attempt.value = parseInt(attempt.value) + 1;
        if (getResults(input.value)) {
            setMessage("You Win! :)");
            showAnswer(true);
            showReplay();
            return true;
        }

        if (attempt.value > 10) {
            setMessage("You Lose! :(");
            showAnswer(false);
            showReplay();
            return false;
        }

        setMessage("Incorrect, try again.");
    }
}

function showAnswer(won) {
    code.innerHTML = answer.value;

    if (won) {
        code.className = code.className + ' success';
    } else {
        code.className = code.className + ' failure';
    }
}

function showReplay() {
    guessDiv = document.getElementById('guessing-div');
    replayDiv = document.getElementById('replay-div');

    guessDiv.style = 'display:none';
    replayDiv.style = 'display:block';
}

function getResults(input) {
    var html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';

    for (i = 0; i < 4; i++) {
        // if the character is the same as the one in the answer
        if(input[i] == answer.value[i])
        {
            html = html + '<span class="glyphicon glyphicon-ok"></span>';
            continue;
        }

        if (answer.value.includes(input[i])) {
            // if the character exists in the string
            html = html + '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            // if the character does not exist in the string.
            html = html + '<span class="glyphicon glyphicon-remove"></span>';
        }
    }
    html = html + "</div>";

    results.innerHTML = html;

    if (input == answer.value) {
        return true;
    }

    return false;
}

function setHiddenFields() {
    if (attempt.value == '') {
        attempt.value = 0;
    }

    var min = 0;
    var max = 9999;

    answer.value = Math.floor(Math.random() * (max - min)) + min;

    while (answer.value.length < 4) {
        answer.value = "0" + answer.value;
    }
}

function setMessage(my_message) {
    message.innerHTML = my_message
}

function validateInput(input) {
    if (input.length == 4) {
        return true;
    } else {
        message.innerHTML = "Guesses must be exactly 4 characters long.";
        return false;
    }
}

setHiddenFields();

//implement new functions here
