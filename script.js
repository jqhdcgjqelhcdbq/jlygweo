function checkAnswer(button, message) {
    const buttons = button.parentElement.querySelectorAll('button');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn === button) {
            btn.classList.add(message === 'Correct!' ? 'correct' : 'incorrect');
        }
    });
    button.parentElement.querySelector('p').innerText = message;
}

function checkFreeResponse() {
    const input = document.getElementById('free-response');
    const feedback = document.getElementById('feedback3');
    const answer = input.value.trim().toLowerCase();
    if (answer === 'tokyo') {
        input.classList.add('correct');
        feedback.innerText = 'Correct!';
    } else {
        input.classList.add('incorrect');
        feedback.innerText = 'Incorrect';
    }
}

