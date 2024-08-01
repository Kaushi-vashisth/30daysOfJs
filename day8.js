// Activity 1

// Task 1

let name = "kaushiki"
let age = 18

console.log(`Hello I am ${name} and I'm ${age}`); // output:- Hello I am kaushiki and I'm 18

// Task 2

let multiline = "Hello" , extra = "Hello2"
console.log(`print ${multiline} ${multiline}`); // output:- print Hello Hello

// Activity 2

// Task 3

let arr = [1,2,3,4,5,6,7,8,9]

let fst,scnd;
[fst,scnd] = arr

console.log(`${fst} ${scnd}`); // output:- 1 2

// Task 4

let obj = {
    title: "Hey",
    author: "Kaushiki"
}

let {title, author} = obj
console.log(`${title} by ${author}`); // output:- Hey by Kaushiki

// Activity 3

// Task 5

let arr1 = [1,2,3]
let arr2 = [...arr1]
arr2.push(4,5)

console.log(arr2); // output:- [ 1, 2, 3 ,4,5]

// Task 6

function sum(...arg){
    return arg.reduce((e1,e2)=>{
        return e1 + e2
    })
}

console.log(sum(1,2,3,4,5)); // output:- 15

// Activity 4

// Task 7

function multiply(a,b=1){
    return a * b
}

let product1 = multiply(4,3)
let product2 = multiply(5)
console.log(product1,product2); // output:- 12 5

// Activity 5

// Task 8

let names = "Kaushiki"
let ages = 18

const object = {
    names,
    ages,
    print(){
        console.log(`Hello ${this.names} from ${this.ages}`)
    }
}

object.print(); // output:- Hello Kaushiki from 18

//Task 9

const name1 = 'name';
const name2 = 'age';
const name3 = 'location';

const person = {
  [name1]: 'KV',
  [name2]: 18,
  [name3]: 'Indore'
};

console.log(person); // output:- { name: 'KV', age: 18, location: 'Indore' }