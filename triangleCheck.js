const btnCheck = document.querySelector(".btn-check");
const anglesAll = document.querySelectorAll(".angle-input")
const finalMessage = document.querySelector(".final-message")

function inputCalculator() {
    const angleOne = anglesAll[0].value;
    const angleTwo = anglesAll[1].value;
    const angleThree = anglesAll[2].value;
    const sum = sumCalculator(angleOne, angleTwo, angleThree);
    checker(sum)
}

function sumCalculator(angleOne, angleTwo, angleThree) {
    if (angleOne&&angleTwo&&angleThree) {
        if (angleOne != 0, angleTwo != 0, angleThree != 0) {
            const sumOfAngles = Number(angleOne) + Number(angleTwo) + Number(angleThree);
            return sumOfAngles;
        }
        else {
            finalMessage.innerText = "It is not a Triangle"
        }
    }
    else {
        finalMessage.innerText = "Please enter all the angles"
    }

}


function checker(sum) {
    if (sum === 180) {
        finalMessage.innerText = "It is a Triangle"
    }
    else {
        finalMessage.innerText = "It is not a Triangle"
    }
}

btnCheck.addEventListener("click", inputCalculator)