const btnCheck = document.querySelector(".btn-check")
const sideOne = document.querySelector("#side-first")
const sideTwo = document.querySelector("#side-second")
const outputMsg= document.querySelector(".final-message")

function inputHandler(){
    const sideOneValue = sideOne.value;
    const sideTwoValue = sideTwo.value;
    if(sideOneValue&&sideTwoValue){
        sumCalculator(sideOneValue,sideTwoValue)
    }
    else{
        outputMsg.innerText = "Please enter the lengths of both the sides"
    }
    
}

function  sumCalculator(sideOneValue,sideTwoValue){
   const sum = sideOneValue**2 + sideTwoValue**2;
   const hypo = Math.sqrt(sum)
   const roundedHypo = hypo.toPrecision(3)
   outputMsg.innerText = "The length of Hypotenuse is " + roundedHypo  + " cm"
}



btnCheck.addEventListener("click", inputHandler) 