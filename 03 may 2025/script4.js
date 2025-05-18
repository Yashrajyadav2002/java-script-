let str= "javascript";

// gives the number of cheractor

let x= str.length;

// charAT  -  give the charactor at that index

x = str.charAt(5);
//console .log(str.charAT(4))

console.log(x);

// indexof() - returns the index number of cheractor

x= str.indexOf("p");
console.log(x);

x= str.toUpperCase();
console.log(x);

x=str.toLowerCase();
console.log(x);

//include method (chek the text is present in string or not)?\

x= str.includes("great");
console.log(str)

//replace - replace first element
// replace ALL - replace all elements

x= str.replace("javascript","react");
x= str.replaceAll("javascript","react");

console.log(x);

//trim - it whitespace start and end
x = str.trim();
console.log(x);

//split - convert to array

x = str.split(" ");
console.log(x);

//slice is the part of a string (strating index, ending index )

x = str.slice(0,15);
x = str.slice(-3 );
console.log(str);
console.log(x);

// substring
x = str.substring(0,10);
x = str.substring(25);

console.log(str);
console.log(x);

// add the two string

let a = "hello";
let b = "yash";

let c = `${a} ${b}`;

// my task
let mystring="Devloper";
let mynewstring = mystring.chartAT(0) + mystring.substring();


// now we are solve the string questions

//Q.1 create a program to take full name from user and genurate a user name strart with followed by their full name end with under score followed by the length of full name

let user = prompt("enter your name");
let username = `@${user.trim()} _ ${user.length}`;
console.log(username);

// question no 2

let val = prompt ("enter the string value");
let ch = prompt ("enter the charactor");
let count =1;
for (char of val);
if(char===ch){
count++;
}
console.log(count);

// question number 2 (face =2)
let val7 = prompt ("enter the string value");
let ch7 = prompt ("enter the charactor");
let count7 =1;
for (char of val);
if(char.toLowerCase===ch7.toLowerCase){
count++;
}
console.log(count);


// let val = prompt ("enter the string value");
// let ch = prompt ("enter the charactor");
// let count =1;

for (let index in val){
    if(val[index].toLowerCase()=== ch.toLowerCase()){
        console.log("ocerance position = ",index)
        count++;
    }
}
console.log("count = ", count);

// question num 3 counting the words

let vol = "hello who are you";
console.log(vol.split(" ").length);






