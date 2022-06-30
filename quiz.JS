const buttonSubmit = document.querySelector("#btn-submit")
const quizForm = document.querySelector("#form-quiz")
const outputText = document.querySelector("#output")


const correctAnswers = ["85", "6", "(1/2) bh", "5cm", "80 degrees"]

function inputHandler() {

    let score = 0;

    const inputAnswers = new FormData(quizForm);
    for (let value of inputAnswers.values()) {
        for (i = 0; i < correctAnswers.length; i++) {

            if (value === correctAnswers[i]) {
                score = score + 1;
            }

        }
      
    }
    outputText.innerText ="Your Score is " + score;
}
    buttonSubmit.addEventListener("click", inputHandler)