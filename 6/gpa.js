

function getGrades() {
    let gradeSanitizer = ["A", "B", "C", "D", "F"]

    let grades = document.getElementById("grades").value;
    
    let gradeInput = grades.split(",");

    let gradeArray = [];

    gradeInput.forEach(grade => {
        cleanGrade = grade.trim().toUpperCase();
        if (gradeSanitizer.includes(cleanGrade)) {
            gradeArray.push(cleanGrade);
        }
    });

    return gradeArray;
}


function convertGradeToPoints(grades) {

    points = 0;

    grades.forEach(grade => {
        switch (grade) {
            case "A":
                points += 4.0;
                break;
            case "B":
                points += 3.0;
                break;
            case "C":
                points += 2.0;
                break;
            case "D":
                points += 1.0;
                break;
            case "F":
                points += 0.0;
                break;
            default:
                points += 0.0;
                break;
        }

    });
    return points;
}

function gradePointAverage(points, array) {
    return points / array.length;
}

function outPutGPA(GPA) {
    document.getElementById("output").innerHTML = "Your Grade Point Average is: "+ GPA.toFixed(3);
}

function clickHandler() {
    let gradeArray = getGrades();
    console.log(gradeArray);

    let gPoints = convertGradeToPoints(gradeArray);
    console.log(gPoints);

    let GPA = gradePointAverage(gPoints, gradeArray);
    console.log(GPA);

    outPutGPA(GPA);
}

document.getElementById("submitButton").addEventListener("click", function() {
    clickHandler();
});

document.getElementById("grades").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
    clickHandler();
    }
});