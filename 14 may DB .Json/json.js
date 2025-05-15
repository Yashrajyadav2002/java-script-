[
    {
        "id":1,
        "name":"jhon"
    },
    
    {
        "id":2,
        "name":"yash"
    },
]

// object to JSON string

const user = {
    name : "yash",
    id :1,
    age:22,
};
console.log(user);

const data = JSON.stringify(user);
console.log(data);

// JSON to object
const updates = JSON.parse(data);
console.log(updates);

// task objects

//  access the name and are from the objects

let person = {
    name:"yash",
    age:22,
    city:"banglore",
};
console.log(person.name);
console.log(person.age);
console.log(person.city);

// add a new key value pair 

let cust = {
    username:"hellook",
    gmail:"yyash9631@gmail.com",
    country:"united",
};
cust.country = "india",
console.log(cust);

// change the sataus to "inactive" in this object

let money = {
    id:1,
    status:"active",
};

money.status = "inactive",
console.log(money);

//check the object has the key  email

let pro = {
    name:"raj",
    hobby:"gaming",

};
console.log(pro.email);

//add the element "blue" to the end of this array

let colour = ["pink","green","yellow"];

colour.push("blue"),
console.log(colour);

//remove the last elements from this array 

let fruits = ["banana","orange","grapes"];

fruits.pop(),
console.log(fruits);

// remove the first element from array

let tasks = ["wake up","brush","eat"];
tasks.shift(),
console.log(tasks);
// add the start to the beginning

let steps = ["steap1","steap2"];

steps.unshift("start"),
console.log(steps);

// creat a subArray  from index 1 to 3 (excliuding index 3)

let nums = [10,20,30,40,50];
let another = nums.slice;
console.log(another);

// remove the 2 elements from starting

let letters = ["a","b","c","d"];

letters.splice(0,2);
console.log(letters);

// insert "x" and "y" index 2 without remove anything

let arr = [1,2,3,4];
arr.splice(0,2,"x","y");
console.log(arr);

// combine the number

let h = [1,2];
let i = [3,4];

let j =console.log (...h,...i);

//reverse the arry

let seq = [1,2,3,4,5];

seq.reverse();
console.log(seq);



