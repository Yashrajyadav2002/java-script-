// // array literal
// const numbers =[1,2,3,4,5,6,7];
// console.log(numbers[0]);

// let a = numbers[1];
// console.log(a);

// //construtor
// const colors = new Array();

// colors[0] = "red";
// colors[1] = "pink";
// colors[2] = "green";
// console.log(colors);

// //(mixed) convert the value into array

// const mixed = [10,20,"jhon",true,{age:24,city:"nagpur"}];

// console.log(mixed[0]);
// console.log(mixed[1]);
// console.log(mixed[4].age);

// // length give the array length
// x= numbers.length(5);
// console.log(x);

// //it terturns the number of elements\
// x= numbers.indexOf(6);
// console.log(x);

// // include returns the include value
// x = numbers.includes(7);
// console.log(x);

// //push - add the element in end 
// x =numbers.push(8);
// console.log(x);
// // pop - remove the value of end
// let x = "javascript";
// x =numbers.pop(4);
// console.log(x);

// //unshift - is add the element in starting
// x= numbers.unshift(10);
// console.log(x);

// //shift - remove the start element
// x = numbers.shift(10);
// console.log(x);

// // reverse - it reverse the array
// x =numbers.reverse();
// console.log(x);

// //convert - array to string
// x = numbers.toString();
// x =numbers.join();
// console.log(x);

// // slice - returns the array with selected elements
// // it does not change the original value
// x = numbers.slice(1,4);
// console.log(x);

// // splice - takes the starting index , number of elements to remove //it changes the original array

// x= numbers.splice(1,2);
// console.log(x);
// console.log(numbers);
// // splice - second thing ( it remove and add the elemnts)

// x= numbers.splice(0,100,200,300);
// console.log(x);
// console.log(numbers);

// // // chaining
// // const arr =[10,20,30,40,50];
// // x= arr.slice(1,4). reverse().tostring().chartAt(0);
// // console.log(x);

// const fruits =["apple","mango","kivi"];
// const vege = ["potato","tomato","peas"];

// let full =[fruits,vege];

// console.log(full);
// x= full[1][0];
// console.log(full);
// full = fruits.concat(vege);
// console.log(full);

// // Array practice
// let arr = [1,2,3,4,5,6,7];
// console.log(arr ,typeof arr);
// arr[0]=599;
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// // array is muatable

// // convert in to string 
// let arr1 = [ 599,799,899,1,5,6];
// console.log(arr1 , toString ());

// // the join is conver the comma into command 
// console.log(arr1.join(" and "));

// // pop method - it remove the last element of an array 
// console.log(arr1.pop());
// console.log(arr1);

// // push - it add the last element in array
// console.log(arr1.push("yash"));
// console.log(arr1);

// //shift - it remove the first element 
// console.log(arr1.shift());
// console.log(arr1);

// // unshift - it add the element in first 
// console.log(arr1.unshift(899));
// console.log(arr1);

// //concate - it join the two array in one
// // it not change the exiting array 
// let one = [1,2,3,4];
// let two = [5,6,7,8];
// let join = one.concat(two);
// console.log(join);

// //sort - it short an array 
// // it change the original array 

// let the = ['a','b','c'];
// console.log(the);
// console.log(the.sort());

// // splice - it add the items in the array 
// let spli = [1,2,3,4,5];
// console.log(spli.splice(1,4));
// console.log(spli);

// // slice - it out the pice from array creat a new array

// let some = [1,2,3,4];
// console.log(some.slice(1));

// // reverse  - it revertse the elements 
// let rev = [1,2,3,4,5,6];
// console.log(rev.reverse());

// // reduse method - it return the one value of the total value 
// let and = [1,2,3,4,5];
// let res =(a,b)=>{
//     return a+b ;
// }
// console.log(and.reduce(res));

 let and = [1,2,3,4,5];
 let res =(a,b)=>{
    return a+b ; }
 console.log(and.reduce(res));

// // Array practice 05 june 2025 ?

// // // Find the sum of all elements .Given an array [2,4,6,8,10],write a program to find the sum of all elements /
// // let = arr =[2,4,6,8,10];
// // let = total = arr.reduce((sum,value)) => sum +value,0 );
// // console.log(total);

// let = arr =[2,4,6,8,10];
//  let = total = arr.reduce((sum,value)) => (sum +value,0 );
//  console.log(total);

// //Write a program to find the maximum number in array [3,7,2,9,5] ?
let maxi = [3,7,2,9,5];
let total = Math.max(...maxi);
console.log(total);
// //Count the number how many number even or odd are in [1,2,3,4,5,6,7,8,9]; ?
let arr =[1,2,3,4,5,6,7,8,9,10];
let evencount =0;
let oddcount =0;

for (let i =0; i<arr.length;i++){
    if(arr[i]%2===0){
        evencount++;
    } else{
        oddcount++;
    }
};
console.log("number of even number",evencount);
console.log("number of odd number",oddcount);
// //Write a program to chek if a given number (e.g, 9) exist in array [3,5,7,9,11] ?

// //marge two array [1,2,3] and [4,5,6] without using concat method ?

//  these are literal methods in number declrition 
let num5 = 12345;
let num7 = "12345";
let num6 = '12345';
console.log(num , typeof num);
console.log(num7 , typeof num7);
console.log(num6 , typeof num6);

//constructor method in numbers 
// it allways a number in any condition
let num8 = new Number (123456);
console.log(num8);
 // we chek the it is integer or not

 let val7 = 123.456;
 console.log(Number.isInteger(val7));

 // parseint -  we can change the value  float into  integer?
 let val11 = 125.56;
 console.log(Number.parseInt(val11));
 
 // parsefloat - we can change the value integer into float
 let val22 = '125.384px';
 console.log(Number.parseFloat(val22));

 // isfinite - we can chek the infinte vale ?

 let infi3 = 1/0;
 console.log(Number.isFinite(infi3));

 // number instance method // used on number premative?
   
// (toFixed) - it take the value after the point ?

let fix4 = 123456;
console.log(fix.toFixed(3));

// toexponstional - 

// precision - it return the pre size value (round figer value)

let pree5 = 123.46;
console.log(pree5.toPrecision(3));


// tostring -  it convert the number into string ?

let str6 = 1234;
console.log(str6.toString().length);


// console.log(and.reduce(res));

 let and1 = [1,2,3,4,5];
 let res1 =(a,b)=>{
    return a+b ; }
 console.log(and1.reduce(res1));

// // Array practice 05 june 2025 ?

// // // Find the sum of all elements .Given an array [2,4,6,8,10],write a program to find the sum of all elements /
// // let = arr =[2,4,6,8,10];
// // let = total = arr.reduce((sum,value)) => sum +value,0 );
// // console.log(total);

// let = arr =[2,4,6,8,10];
//  let = total = arr.reduce((sum,value)) => (sum +value,0 );
//  console.log(total);

// //Write a program to find the maximum number in array [3,7,2,9,5] ?
let maxi1 = [3,7,2,9,5];
let total1 = Math.max(...maxi1);
console.log(total1);
// //Count the number how many number even or odd are in [1,2,3,4,5,6,7,8,9]; ?
let arr1 =[1,2,3,4,5,6,7,8,9,10];
let evencount1 =0;
let oddcount1 =0;

for (let i =0; i<arr.length;i++){
    if(arr[i]%2===0){
        evencount++;
    } else{
        oddcount++;
    }
};
console.log("number of even number",evencount);
console.log("number of odd number",oddcount);
// //Write a program to chek if a given number (e.g, 9) exist in array [3,5,7,9,11] ?

// //marge two array [1,2,3] and [4,5,6] without using concat method ?

//  these are literal methods in number declrition 
let num4 = 12345;
let num3 = "12345";
let num2 = '12345';
console.log(num4 , typeof num4);
console.log(num3 , typeof num3);
console.log(num2 , typeof num2);

//constructor method in numbers 
// it allways a number in any condition
let num9 = new Number (123456);
console.log(num9);
 // we chek the it is integer or not

 let val6 = 123.456;
 console.log(Number.isInteger(val6));

 // parseint -  we can change the value  float into  integer?
 let val1 = 125.56;
 console.log(Number.parseInt(val1));
 
 // parsefloat - we can change the value integer into float
 let val23 = '125.384px';
 console.log(Number.parseFloat(val23));

 // isfinite - we can chek the infinte vale ?

 let infi4 = 1/0;
 console.log(Number.isFinite(infi4));

 // number instance method // used on number premative?
   
// (toFixed) - it take the value after the point ?

let fix5 = 123456;
console.log(fix.toFixed(3));

// toexponstional - 

// precision - it return the pre size value (round figer value)

let pree6 = 123.46;
console.log(pree5.toPrecision(3));


// tostring -  it convert the number into string ?

let str7 = 1234;
console.log(str7.toString().length);


