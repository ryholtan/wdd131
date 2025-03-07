const creditCardContainer = document.getElementById("creditCardNumber");
const paypalContainer = document.getElementById("paypalUsername");
const paymentMethod = document.getElementById("paymentMethod");

async function concealer(element, hide = true) {
    return new Promise(resolve => {
        if (!element) {
            console.error("Element not found:", element);
            resolve();
            return;
        }

        if (hide) {
            element.classList.add("hide");
            let label = document.querySelector(`label[for="${element.id}"]`);
            if (label) label.style.display = "none";
            element.required = false;
        } else if (!hide) {
            element.classList.remove("hide");
            let label = document.querySelector(`label[for="${element.id}"]`);
            if (label) label.style.display = "block";
            element.required = true;
        }

        // Ensure all inputs inside hidden elements are not required
        document.querySelectorAll(".hide input").forEach(input => input.required = false);

        resolve();
    });
}



async function togglePaymentDetails(e) {
    switch (e) {
        case "creditCard":
            await concealer(creditCardContainer, false);
            await concealer(paypalContainer, true);
            break;
        case "paypal":
            await concealer(paypalContainer, false);
            await concealer(creditCardContainer, true);
            break;
        case "dollHairs":
            await Promise.all([
                concealer(creditCardContainer, true),
                concealer(paypalContainer, true)
            ]);
            alert("No one pays with Doll Hairs anymore!!");
            break;
        default:
            await concealer(creditCardContainer, true);
            await concealer(paypalContainer, true);
            alert("Must choose a payment!");
            break;
    }
}

concealer(creditCardContainer, true);
concealer(paypalContainer, true);

// Attach event listener
if (paymentMethod) {
    paymentMethod.addEventListener("change", function () {
        togglePaymentDetails(this.value);
        console.log(this.value);
    });
}

// Form validation
function validateForm(event) {
    const theForm = event.target;
    const errors = [];
    let isValid = true;

    if (!isValid) {
        event.preventDefault();
        showErrors(errors);
        return false;
    }
}

function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    if (errorEl) {
        errorEl.innerHTML = errors.map(error => `<p>${error}</p>`).join("");
    }
}







































































// const creditCardContainer = document.getElementById("creditCardNumber");
// const paypalContainer = document.getElementById("paypalUsername");

// async function concealer(element, hide = true) {
//     return new Promise(resolve => {
//         if (hide) {
//             element.classList.add("hide");
//             document.querySelector(`label[for="${element.id}"]`).style.display = "none";
//             element.required = false;
//         } else if (!hide) {
//             element.classList.remove("hide");
//             document.querySelector(`label[for="${element.id}"]`).style.display = "block";
//             element.required = true;
//         }

//         const inputs = document.querySelectorAll("*");

//         inputs.forEach(input => {
//             if (input.closest(".hide")) {
//                 input.required = false;
//             }
//         });

//         resolve();
//     });
    
// }


// concealer(creditCardContainer, true);
// concealer(paypalContainer, true);

// // creditCardContainer.classList.add("hide");
// // document.querySelector(`label[for="${creditCardContainer.id}"]`).style.display = "none";
// // document.querySelector(`label[for="${paypalContainer.id}"]`).style.display = "none";
// // paypalContainer.classList.add("hide");





// // form-demo.js
// function validateForm(event) {
//     // get a reference to the form. Because we attached a submit event listener to the form itself, we can access the form either through 'event.target', or 'this'
//     const theForm = event.target;
//     // the default behavior for a form submit is to try and navigate to another page where the form would be processed, if a url is not provided it will reload the current page. This sometimes is not desirable behavior. One case when we might do this is if we think there is bad data in the form.
//     // To keep it from happening we can can call e.preventDefault()
//     // You should always give feedback to the user about what whet wrong so they can fix it. We will store the error messages here
//     const errors = [];
//     // start by assuming the form is valid.
//     let isValid = true;
//     // add our validations here

//     // if we ran into any problems above valid will be false.
//     if (!isValid) {
//         //stop the form from being submitted
//         event.preventDefault();
//         // show the errors
//         showErrors(errors);
//         // return false to let the browser know the form was not submitted.
//         return false;
//     }
// }

// async function togglePaymentDetails(e) {
//     // get a reference to the form. We can access all the named form inputs through the form element.
//     // const theForm = document.getElementById("checkoutForm");
//     // we will also need the creditCardContainer and paypalUsernameContainer
    

//     // Hide payment containers by adding the '.hide' class to each of them
    
//     // Disable required for payment fields...if we hide a required field the browser will throw an error when we try to submit!
    
//     ;
//     console.log(e);
//     // Show the container based on the selected payment method, and add the required attribute back.
//     switch (e) {
//         case "creditCard":
//             concealer(creditCardContainer, false);
//             concealer(paypalContainer, true);
//             break;
//         case "paypal":
//             concealer(paypalContainer, false);
//             concealer(creditCardContainer, true);
//             break;
//         case "dollHairs":         
//             await concealer(creditCardContainer, true);
//             await concealer(paypalContainer, true);
//             alert("No one pays with Doll Hairs anymore!!");
//             break;
//         default:
//             concealer(creditCardContainer, true);
//             concealer(paypalContainer, true);
//             alert("Must choose a payment!");
//             break;
//     }

// }

// document.querySelector("#paymentMethod").addEventListener("change", function(){
//     togglePaymentDetails(this.value);
//     console.log(this.value);
// });

// // helper function to display our errors.
// function showErrors(errors) {
//     const errorEl = document.querySelector(".errors");
//     const html = errors.map((error) => `<p>${error}</p>`);
//     errorEl.innerHTML = html.join("");
// }
// // attach a change event handler to the paymentMethod input

// // attach a submit event handler to the form