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
console.log(person.name);
console.log(person['name']);
console.log(person.isEligible);
console.log(person.address.country);
console.log(person.hobbies[1]);
person.greet();