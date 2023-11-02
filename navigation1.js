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
    const weightDisplayElement = document.getElementById("weight-display");
    weightDisplayElement.textContent = weight + " grams";
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

// setInterval(updateData, 1000); 
