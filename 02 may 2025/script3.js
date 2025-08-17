// object literal?

const person={ name:"yash",age:22,city:"canada"};

console.log(person.name);
console.log(person.age);
console.log(person.city);

//array 

const num=[1,2,3,4];

console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[3]);

// funcation 

// funcation declaration

function display(){
    console.log("Yash is here");
}

//function calling 
display();
console.log(display,typeof display);


// operators

let x=15;
let y=10;

let z=x+y;
z=x/y;
z=x*y;
z=x-y;

console.log(z);

x++;
x=x+1;
x-=y;
console.log()

// equlity operator

// chek the value

if (x === y){
    console.log(true);
}
else{
    console.log(false);
}

//concatenation

let first="hello";
let last="who";

let fullstring = first +" " + last;
console.log(fullstring);

// string 
// template tetril or template string?

let data=`hello everyone i think you understand my things ${first} and ${last}`;

console.log(data);

//  !!!!!!!!!!!!!! COMMON STRING METHODS !!!!!!!!!!!!!!!!!!

// LENGTH - returns the count of the string

let text = "javascript";
console.log(text.length);

// touppercase - returns the upper vale of string
let str = "yashraj";
console.log(str.toUpperCase());

// tolowercase - returns the lower vale of string

let low = "YADAVJI";
console.log(low.toLowerCase());

// charAT - returns the charactor at a specfic index

let char = "sonu rawat";
console.log(char.charAt(5));

// indexOF - returns the position of first match

let index = "yadavjisarkar";
console.log(index.indexOf("sarkar"));

// includes - returns the substring exists

let inc = "Hello Betu";
console.log(inc.includes("Hello"));

//slice - returns the part of the string (it will give the number of string value)

let slice = "yadavji sarkar";
console.log(slice.slice(7));

// replace - returns the replace value of string

let rep = "yashraj yadavji";
console.log(rep.replace("yadavji","sarkar"));



