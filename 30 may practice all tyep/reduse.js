const numbers =[123,125,1260];
const value = numbers.reduce(myfuncation);

function myfuncation (total,num){
    return total + num ;
}
console.log(value);

// erite an array of 5 fruits and long the third fruits ?

let fruits = ["apple","mango","grapes","orange"];
console.log(fruits[2]);

// add an element to the end of an array ?

let count = [1,2,3,4];
console.log(count.push(5));
console.log(count);

// remove the first elemnnt 

let remov = [1,2,3,4];
console.log(remov.unshift(0));
console.log(remov);

// chek if a element exist in array ?

let num = [1,2,3,4,5];
let res = num.includes(5);
console.log(res);

// loop thorough in arry and print each value ?

let val = [10,20,30,40];
for (let i=0;i<4; i++){
    console.log(val[i]);
}

//creat an object represting a person with name and age,and log the name ?

let person ={
    name:"yash",
    age:23,
}
console.log(person.name);
console.log(person.age);

//add a new value pair to an object ?

let obj = {name:"jhon"};
obj.age = 23;
obj["city"]= "banglore";
console.log(obj);

// 
