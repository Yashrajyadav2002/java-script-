// question number 0.1

let str = "javascript";
let latter = str.slice(0,3);
console.log("the latters are =",latter);

// question number 0.2
// Delete the first latter of a string ?

let str1 ="javascript";
let del = str1.slice(1);
console.log(del);

//question number 0.3
// short an array to string

let str2 = "aman";
let change = str2.split("");
console.log(change);

// question number 0.4
//how to remove line breaks from a string?
let line = " this is the line  \n  brake point";
let rep = line.replace( "\n " ,  " ");
console.log(rep);


//question number 0.5
//extrect a number from a string using javascript ?



//question number 0.6
// convert string into date using javascript?



//question number 0.7
// //insert a string at a spscific index ?
let original = "Hello yash";
let result = original.replace("dear");
console.log(result);

//question number 0.8
//how to find the longest word within the string in javascript ?

let str4 = prompt("enter the sentense comes with log and short words")
let words = str4.split(" ");
let longest ="";

for (let word of words){
    if (word.length > longest.length){
        longest = word;
    }
}
console.log("the longest word is ",longest);

//question number 0.9
//write a javascript program to find the prime number in a given array ?




//question number 0.10
//write a program to find the smallest value in an array ?

let small =Math.min(10,20,30,40,-40);
console.log(small);


//question number 0.11
//write a program to find the sum of value of an array ?

let arr = [1,2,3,4,5];
let sum = 0;

for (let i = 0; i<arr.length; i++){
sum +=arr[i];
}
console.log("sum of the array is",sum);


// question number 0.12
// write a program to check the given srting is a palindrom or not ?




// question number 0.13
//write a javascript program to find current age of any person by using his/her data of birth ?


// question number 0.14
// //how to caluclate the yesterday date in javascript ?
const today = new Date();
const yesterday = (today.getDate()-1);
console.log(yesterday);

//question number 0.15
// write a javascript program to find the given year is leap year or not ?
    let year = prompt("enter the year");

if(year%4===0 && year%400===0){
    console.log("the year is leap year");
}
else{
    console.log("the year is not a leap year");
};

