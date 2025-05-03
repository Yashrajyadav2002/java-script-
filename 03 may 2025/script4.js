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








