const pi = 3.14;
let radius = 3;
let area = 0;

function circleArea(radius) {
    return radius **2  * pi;
}

console.log("Area1", circleArea(radius))
console.log("Area2", circleArea(radius+1))