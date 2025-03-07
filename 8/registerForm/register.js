let currentParticipant = 1;
document.getElementById("summary").classList.add("hide");

import {feeAdder, participantTemplate, thankMessage} from "./Template.js";

document.getElementById("add").addEventListener("click", function() {
    currentParticipant++;
    console.log(currentParticipant);

    participantTemplate(currentParticipant);
});


function submitForm(event) {
    event.preventDefault();
    // take fees and add them
    let total = feeAdder();
    console.log(`total fees: ${total}`)
    // get adult name
    let adultName = document.getElementById("adult_name").value;
    
    // show the thank you message with name and total
    thankMessage(adultName, currentParticipant, total);  
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("form").addEventListener("submit", submitForm);
});

