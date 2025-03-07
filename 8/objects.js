import aCourse from "./Course.mjs";

aCourse.init();

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function(e) {
        
        if (e.target.id === "enrollStudent") {
            handleEnrollment(true);
        } else if (e.target.id === "dropStudent") {
            handleEnrollment(false);
        }
    })
});

function handleEnrollment(enroll) {
    let sectionSelection = document.getElementById("sectionNumber").value;
    console.log(sectionSelection);
    aCourse.updateEnrollment(sectionSelection, enroll);
}


