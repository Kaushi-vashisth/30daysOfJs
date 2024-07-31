// Task 1
let arr = [1, 2, 3, 4, 5];
console.log(arr);

// Task 2
console.log(arr[0]); // First ele
console.log(arr[arr.length - 1]); // Last ele

// Task 3
arr.push(6);
console.log(arr);

// Task 4
arr.pop();
console.log(arr);

// Task 5
arr.shift();
console.log(arr);

// Task 6
arr.unshift(8);
console.log(arr);

// Task 7
let NewArray = arr.map(num => num * 2);
console.log(NewArray);

// Task 8
let evenArray = arr.filter(num => num % 2 === 0);
console.log(evenArray);

// Task 9
let sum = arr.reduce((a, b) => a + b,0);

console.log(sum); // output:- 22

// Task 10
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Task 11
arr.forEach(element => console.log(element));

// Task 12
let mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(mat);

// Task 13
console.log(mat[2][1]); 