import { readDistance } from './ultrasonic.js';
import { readWeight } from './loadcell.js';
import { isIRLimitExceeded } from './irsensor.js';

const body= document.querySelector("body"),
	sidebar= body.querySelector(".sidebar"),
	toggle= body.querySelector(".toggle"),
	searchBtn= body.querySelector(".search-box"),
	modeSwitch= body.querySelector(".toggle-switch"),
	modeText= body.querySelector(".mode-text");
	
	toggle.addEventListener("click",() =>{
		sidebar.classList.toggle("close");
	});
    
    
	searchBtn.addEventListener("click",() =>{
		sidebar.classList.remove("close");
	});

    modeSwitch.addEventListener("click",() =>{
		body.classList.toggle("dark");
        if(body.classList.contains("dark")){
            modeText.innerText ="Light Mode";
        }
        else{
            modeText.innerText ="Dark Mode";
        }
	});

function updateWasteLevel(level) {
    const wasteLevelElement = document.getElementById("waste-level");
	const fillLevelElement = wasteLevelElement.querySelector(".fill-level");
	// if (level > 80) {
    //     fillLevelElement.style.background = "red";
    // } else {
    //     fillLevelElement.style.background = "#1875FF";
    // }
    wasteLevelElement.style.height = level + "%";
    wasteLevelElement.textContent = level + "%";
}
function displayOverflowAlert() {
    window.alert("Bin Overflow! Please empty the bin.");
}


function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById("error-message");
    errorMessageElement.textContent = message;
}

function updateWeight(weight) {
    const weightDisplayElement = document.querySelector(".cute-box");
    weightDisplayElement.classList.add("cute-box-active");
    weightDisplayElement.textContent = weight + " grams";
    setTimeout(() => {
      weightDisplayElement.classList.remove("cute-box-active");
    }, 2000); 
  }


function updateData() {
    const wasteLevel = readDistance();
    const weight = readWeight(); 
    var isOverflow =0; 
	console.log("wasteLevel: ",wasteLevel);
    updateWasteLevel(wasteLevel);
    updateWeight(weight);
	if(wasteLevel > 80){
		displayOverflowAlert();
	}
	else{
		displayErrorMessage("");
	}
}

const checkboxInput = document.getElementById('checkboxInput');
let intervalId; 

checkboxInput.addEventListener('change', function() {
  if (this.checked) {
    intervalId = setInterval(updateData, 1000);
    console.log('Checkbox is checked, execute your code here.');
  } else {
    clearInterval(intervalId);
    console.log('Checkbox is unchecked, stopping the code.');
  }
});
var overflowValue = true; 
var distanceValue = 3.5;  
var pressureValue = 7.2; 


document.getElementById("overflow").querySelector(".hex").textContent = overflowValue.toString();
document.getElementById("distance").querySelector(".hex").textContent = distanceValue.toFixed(2).toString()+" m"; 
document.getElementById("pressure").querySelector(".hex").textContent = pressureValue.toFixed(2).toString()+" bar"; 