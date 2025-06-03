// array literal
const numbers =[1,2,3,4,5,6,7];
console.log(numbers[0]);

let a = numbers[1];
console.log(a);

//construtor
const colors = new Array();

colors[0] = "red";
colors[1] = "pink";
colors[2] = "green";
console.log(colors);

//(mixed) convert the value into array

const mixed = [10,20,"jhon",true,{age:24,city:"nagpur"}];

console.log(mixed[0]);
console.log(mixed[1]);
console.log(mixed[4].age);

// length give the array length
x= numbers.length(5);
console.log(x);

//it terturns the number of elements\
x= numbers.indexOf(6);
console.log(x);

// include returns the include value
x = numbers.includes(7);
console.log(x);

//push - add the element in end 
x =numbers.push(8);
console.log(x);
// pop - remove the value of end
let x = "javascript";
x =numbers.pop(4);
console.log(x);

//unshift - is add the element in starting
x= numbers.unshift(10);
console.log(x);

//shift - remove the start element
x = numbers.shift(10);
console.log(x);

// reverse - it reverse the array
x =numbers.reverse();
console.log(x);

//convert - array to string
x = numbers.toString();
x =numbers.join();
console.log(x);

// slice - returns the array with selected elements
// it does not change the original value
x = numbers.slice(1,4);
console.log(x);

// splice - takes the starting index , number of elements to remove //it changes the original array

x= numbers.splice(1,2);
console.log(x);
console.log(numbers);
// splice - second thing ( it remove and add the elemnts)

x= numbers.splice(0,100,200,300);
console.log(x);
console.log(numbers);

// // chaining
// const arr =[10,20,30,40,50];
// x= arr.slice(1,4). reverse().tostring().chartAt(0);
// console.log(x);

const fruits =["apple","mango","kivi"];
const vege = ["potato","tomato","peas"];

let full =[fruits,vege];

console.log(full);
x= full[1][0];
console.log(full);
full = fruits.concat(vege);
console.log(full);

// Array practice
let arr = [1,2,3,4,5,6,7];
console.log(arr ,typeof arr);
arr[0]=599;
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

// array is muatable

// convert in to string 
let arr1 = [ 599,799,899,1,5,6];
console.log(arr1 , toString ());

// the join is conver the comma into command 
console.log(arr1.join(" and "));

// pop method - it remove the last element of an array 
console.log(arr1.pop());
console.log(arr1);

// push - it add the last element in array
console.log(arr1.push("yash"));
console.log(arr1);

//shift - it remove the first element 
console.log(arr1.shift());
console.log(arr1);

// unshift - it add the element in first 
console.log(arr1.unshift(899));
console.log(arr1);

//concate - it join the two array in one
// it not change the exiting array 
let one = [1,2,3,4];
let two = [5,6,7,8];
let join = one.concat(two);
console.log(join);

//sort - it short an array 
// it change the original array 

let the = ['a','b','c'];
console.log(the);
console.log(the.sort());

// splice - it add the items in the array 
let spli = [1,2,3,4,5];
console.log(spli.splice(1,4));
console.log(spli);

// slice - it out the pice from array creat a new array

let some = [1,2,3,4];
console.log(some.slice(1));

// reverse  - it revertse the elements 
let rev = [1,2,3,4,5,6];
console.log(rev.reverse());

// reduse method - it return the one value of the total value 
let and = [1,2,3,4,5];
let res =(a,b)=>{
    return a+b ;
}
console.log(and.reduce(res));
