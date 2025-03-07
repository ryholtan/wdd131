export function feeAdder() {
    // Get all elements whose IDs start with 'fee'
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);

    // Convert NodeList to an array and sum the values of each element
    let totalFee = [...feeElements].reduce((total, feeElement) => {
        // Assuming each fee element is an input field and has a value property
        return total + parseFloat(feeElement.value) || 0;  // Handle non-numeric values safely
    }, 0);

    // Return the total fee
    return totalFee;
}

export function participantTemplate(currentParticipant) {
    let template = document.getElementsByClassName("participant1")[0];

    // Clone the template, including the element itself, not just innerHTML
    let clonedTemplate = template.cloneNode(true);

    // Update the class of the cloned section
    clonedTemplate.classList.replace("participant1", `participant${currentParticipant}`);
    clonedTemplate.querySelector("p").innerHTML = `Participant ${currentParticipant}`

    // Append the cloned section before the "add" element
    document.getElementById("add").insertAdjacentElement("beforebegin", clonedTemplate);
}

export function thankMessage(Name, currentParticipant, feeTotal) {
    let thankMessage = document.getElementById("summary");

    thankMessage.innerText = `Thank you ${Name} for registering. You have 
    registered ${currentParticipant} participants and owe ${feeTotal} in Fees.`

    let form = document.querySelector("form");

    thankMessage.classList.remove("hide");
    form.classList.add("hide");
}