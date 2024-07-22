// Activity 1 : for loop

// Task 1
// NUmbmer Printing Script

for(let i = 1; i <= 10; i++){
    console.log(i);
}
// output :- 1,2,3,4,5,6,7,8,9,10

//Task2 
// Multiplication Table Script

let num = 6;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}

// Output:
// 6 x 1 = 6
// 6 x 2 = 12
// 6 x 3 = 18
// 6 x 4 = 24
// 6 x 5 = 30
// 6 x 6 = 36
// 6 x 7 = 42
// 6 x 8 = 48
// 6 x 9 = 54
// 6 x 10 = 60


// Activity 2 : While Loop

// Task 3
// Sum Calculation Script
let sum = 0;
let i=1;
while(i<=10){
    sum=sum+ i;
    i++;
}
console.log(`sum of numbers is ${sum}`);

// Task 4
let number = 10;
while(number>0){
    console.log(number);
    number--;
}
// output :-10,9,8,7,6,5,4,3,2,1


// Activity 3 : Do.. while loop

// Task 5 
let k =1;
do{
    console.log(k);
    k++;
}
while(k<=5);
/*output
1
2
3
4
5 */

//Task 6 
//Factorial Calculation Script

let fact = 6; 
let factorial = 1;
let p = 1;

do {
    factorial *= p;
    p++;
} while (p <= fact);

console.log(`The factorial of ${fact} is ${factorial}`);
//output
// The factorial of 6 is 720


//Activity 4 : Nested Loops

//Task 7                     
//Pattern Printing Script 
let b = 5;
for(let i = 0; i < b; i++) {
    let row = '';
    for(let j = 0; j <= i; j++) {
        row += '*';
    }
    console.log(row);
}
 /* OUTPUT : 
    *
    * *
    * * *
    * * * *
    * * * * *  
*/


//Activity 5: Loop Control Statements:

//Task 8:  CONTINUE
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the loop iteration if i is 5
    }
    console.log(i);
}
/*Output:
1
2
3
4
6
7
8
8
9
10 
*/

//Task 9 : BREAK
for (let num = 1; num <= 10; num++) {
    if (num === 7) {
        break; // Stop the loop when num is 7
    }
    console.log(num);
}
/*Output:
1
2
3
4
5
6
*/