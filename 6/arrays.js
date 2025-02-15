//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
    return `<li>${step}</li>`;//the html string made from step
}

const stepsHtml = steps.map(listTemplate)// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML


const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    switch (grade) {
        case "A":
            points = 4;
            break;
        case "B":
            points = 3;
            break;
        default:
            points = 0;
    }
    return points;
}

const gPoints = grades.map(convertGradeToPoints);
console.log("Points for each grade:", gPoints);

const totalPoints = gPoints.reduce(function(total, item) {
    return total + item;
});
const gpa = totalPoints / gPoints.length;
console.log("Cumulative GPA to three decimals:", gpa.toFixed(3));

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortFruit = fruits.filter(function (fruit) {
    return fruit.length < 6;
});
console.log("Fruit names with less than 6 characters:", shortFruit);

const numbers = [12, 34, 21, 54];
const luckyNum = 21;
const luckIndex = numbers.indexOf(luckyNum);
console.log("The index of '21' in our number list:", luckIndex);