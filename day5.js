//Task 1--> function to check if number is even or odd
function checkEvenOdd(num)
{
    if(num%2==0)
        return "even";
    else
        return "odd";
}
let num=12;
console.log(`${num} is ${checkEvenOdd(num)}`);
//Output : 12 is even


// Task 2--> function to calculate square of a number and return result
function calculateSquare(number) {
    return number * number;
}

console.log(calculateSquare(6)); // Output: 36


//Task 3--> Max of two numbers using function expression
const findMax = function(a, b) {
    let max = (a > b) ? a : b;
    console.log("Maximum: " + max); 
};

findMax(20, 50); // Output: Maximum: 50


//Task 4--> function expression to concatenate two strings
function concatenate2str(str1,str2){
    return str1 + str2;
}
let str1 = "Kaushiki";
let str2 = " Vashisth";
let result = concatenate2str(str1,str2);
console.log("The string is :",result);

// output : The string is : Kaushiki Vashisth


//Task 5--> Arrow function to calculate sum of 2 numbers
const sum = (a, b) => a + b;
let a=5,b=4
console.log(sum(a,b)); // Output: 9


//Task 6--> Arrow function to check if string contains a particular character
const Checkstr = (str,c)=>{
    if(str.indexOf(c)!=-1)
        return true;
    else
        return false;
}
let str="kaushiki", c='s';
console.log(Checkstr(str,c));
// Output: true


//Task 7--> function that takes 2 parameters and return their product. Provide default value for second parameter
const product = function (a,b=5){
    return a*b;
}
let n1=5,n2=3;
console.log(product(n1,n2));
// Output : 15


//Task 8--> function that takes name and age with a default value for age and prints greeting
function Nameage(Name,age=17)
{
    console.log(`Hi ${Name}. Your age is ${age}`);
    return;
}
let Name = "Kaushiki",age=18;
Nameage(Name,age);
//Output : Hi Kaushiki. Your age is 18


//Task 9--> Higher Order Function that accepts a function and a number and calls that function that many times
function fun()
{
    console.log("Hello");
    return;
}
function HigherOrdFunc(fun,n5)
{
    for(let i=1;i<=n5;i++)
        fun();
    return;
}
HigherOrdFunc(fun,4);
// Output : Hello will be printed 4 times


// Task 10--> 
function f1(n)
{
    return n*n;                                         
}
function f2(n)
{
    return n+2;
}
function func(f1,f2,val)
{
    let result=f1(val);
    return f2(result);
}
console.log(func(f1,f2,7));
// Output :51