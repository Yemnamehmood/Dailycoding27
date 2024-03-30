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

//TASK 2 (Updating object properties)
//starting with the car object
// Define the type of the car object

// Define the type of the car object
interface Car {
    make: string;
    model: string;
    year: number;
    color?: string; // Optional property color
}

// Starting with the car object
let cAr: Car = {
    make: "Toyota",
    model: "Fortuner",
    year: 2023,
};

// Adding a new property "color" and updating a "year"
(car as Car).color = "Black";
car.year = 2024;
console.log(car); // result with the updated color and year

//TASK 3 (iterating over object properties) using function
//this function shows every detail about an object
// Modify the function to use type assertion
function logObjectProperties(obj: object) {
    for (let property in obj) {
        console.log(`${property}: ${(obj as any)[property]}`);
    }
}

// Using the function with a car object
logObjectProperties({
    make: "Toyota",
    model: "Fortuner",
    year: 2023,
    color: "Black"
});

