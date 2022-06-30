const btnCheck = document.querySelector(".btn-check")
const baseLength = document.querySelector("#side-base")
const heightLength = document.querySelector("#side-height")
const outputText = document.querySelector(".final-message")


function inputHandler(){
    const baseValue = baseLength.value;
    const heightValue = heightLength.value;
    if(baseValue&&heightValue){
         areaCalculator(baseValue,heightValue)
    }
    else{
outputText.innerText = "Please enter both the values"
    }
}


function areaCalculator(baseValue,heightValue){
  const area = 0.5*baseValue*heightValue
  const areaRounded = area.toFixed(3)
  outputText.innerText = "The area of the Triangle is " + areaRounded + " cm²" 
}

btnCheck.addEventListener("click", inputHandler)