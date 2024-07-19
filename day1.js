// Activity 1: Variable Declaration

// Task 1: Declare a variable using `var`, assign it a number, and log the value to the console.

var number = 10;
console.log(number); // Output: 10

// Task 2: Declare a variable using `let`, assign it a string, and log the value to the console.
let string = "Hii,I'm Kaushiki Vashisth";
console.log(string);//output: Hii,I'm Kaushiki Vashisth


// Activity 2: Constant Declaration

// Task 3: Declare a variable using `const`, assign it a boolean value, and log the value to the console.

const boolval = false;
console.log(boolval); // Output: false

// Activity 3: Data Types

// Task 4: Create variables of different data types and log each variable's type using the `typeof` operator.

let num = 10; // Number
let str = "Kaushiki"; // String
let bool = true; // Boolean
let obj = {name: "Kaushiki", Number : 2023}; // Object
let arr = [10, 20, 30, 40, 50]; // Array

console.log(typeof num); // Output: number
console.log(typeof str); // Output: string
console.log(typeof bool); // Output: boolean
console.log(typeof obj); // Output: object
console.log(typeof arr); // Output: object (considered to be object)

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using `let`, assign it an initial value, reassign a new value, and log both values to the console.

let init_val = 10;
console.log(init_val); // Output: 10
init_val =20 ;
console.log(init_val); // Output: 20

// Activity 5: Understanding `const`

// Task 6: Try reassigning a variable declared with `const` and observe the error.

const constnum = 10;
console.log(constnum); // Output: Constant Value
// Uncommenting the next line will cause an error
// constnum = 20 ; // Error: Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

// Note I am using variables declared above from  line no. 24 to 28 

console.log("Value: ", num, ", Type: ", typeof num);
// Output: Value:  10, Type: number

console.log("Value: ", str, ", Type: ", typeof str);
// Output: Value:  Kaushiki, Type: string

console.log("Value: ", bool, ", Type: ", typeof bool);
// Output: Value:  true , Type: boolean

console.log("Value: ", obj, ", Type: ", typeof obj);
// Output: Value:  {name: "Kaushiki", Number : 2023} , Type: object

console.log("Value: ", arr, ", Type: ", typeof arr);
// Output: Value:  [10, 20, 30, 40, 50], Type: object 



// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

let initval = "Hello";
console.log(initval); // Output: Hello
letVariable = "Hello,I am Kaushiki";
console.log(letVariable); // Output: Hello,I am Vansh

const contvar="i am right.";
console.log(contvar); // Output: i am right.
// Uncommenting the next line will cause an error
// contvar = "i am wrong."; // Error: Assignment to constant variable.