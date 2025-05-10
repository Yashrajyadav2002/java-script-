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
x= numbers.length;
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


