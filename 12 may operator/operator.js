// spread operator
// it copies a part of an array or a complite array to another array

// const num1 = [10,20,30,40,50,60];

// const num2 = [60,70,80,90,100];

// const num3 = [...num1, ...num2];

// console.log(num3);

//is array , .form 

// const x = Array.isArray(num1);
// console.log(x);

// const y = Array.from('12345');
// console.log(y);

//Destructuring in operator

// const arr = [1,2,3,4,5,6,7,8];

//const a =arr[0];
//const b=arr[1];

// const [a,b,c,d,...rest]= arr;
// console.log(a,b,c,d);
// console.log(rest);

// question number 2

// const numa = [1,2,3,4,5];

// const numb = [5,6,7,8,9,10];

// const numc = [...numa, ...numb];
// numb.pop(5);
// console.log(numc);

// qurstion number 1

// const count =[1,2,3,4,5];

// count.unshift(0);
// count.reverse();
// console.log(count);

// object litrral

const person ={
    name:"jhon",
    age:46,
    isEligible : true,
    address : {
        state:"mp",
        country : "india",
    },
    hobbies : ["dance","singing"],
    greet: function(){
        console.log("hello");
    }
}

// update
person.age = 67;
//add
person.hasAddress =  true;
console.log(person);
console.log(person.name);
console.log(person['name']);
console.log(person.isEligible);
console.log(person.address.country);
console.log(person.hobbies[1]);
person.greet();

// spread operator(...)
const obj1 = {
    a:1,
    b:2,

};
const obj2 = {
    c:3,
    d:4,
};

const obj3 = {...obj1,...obj2};
console.log(obj3);

// array of objects

const students = [
    {name:"ram",id:1,course:"meran"},
    {name:"shiv",id:2,course:"python"},
    {name:"shyam",id:3,course:"java"},
    {name:"mohan",id:4,course:"php"},
    {name:"raghav",id:5,course:"ruby"},
];
console.log(students[1].name+" "+students[1].id +" "+students[1].course);


console.log(`${students[2].name} ${students[2].id} ${students[2].cousre}`);

//desturcting

const car = {
    color:"red",
    model:2024,
    brand:"ford",
};

console.log(car);
const {color,model,brand} = car;
console.log(color,model,brand);

const { color:a,model:b,brand:c} = car;
console.log(a,b,c);


// json writen in double coat
