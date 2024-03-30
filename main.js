"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//DAY 27
//TASK 1 (Creating and Accesing Object Properties)
//this set up an object for a car with specific details
let car = {
    make: "Toyota",
    model: "Fortuner",
    year: 2023
};
//accesing and showing the car's model
console.log(car.model); //it will show only model of the car from our object
console.log(car); //it will show all detail of the car from our object 
console.log(car.year); //it will only show year of the car from our object 
// Starting with the car object
let cAr = {
    make: "Toyota",
    model: "Fortuner",
    year: 2023,
};
// Adding a new property "color" and updating a "year"
car.color = "Black";
car.year = 2024;
console.log(car); // result with the updated color and year
//TASK 3 (iterating over object properties) using function
//this function shows every detail about an object
// Modify the function to use type assertion
function logObjectProperties(obj) {
    for (let property in obj) {
        console.log(`${property}: ${obj[property]}`);
    }
}
// Using the function with a car object
logObjectProperties({
    make: "Toyota",
    model: "Fortuner",
    year: 2023,
    color: "Black"
});
