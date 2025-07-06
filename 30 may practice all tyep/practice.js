// 0.1 How do you find the length of a string ?
let leng = "my name is king";
console.log(leng.length);
//0.2 write a program to convert  a string to upperr case ?
let str = "it called uppercase";
let upp = str.toUpperCase();
console.log(upp);
// 0.3 how do you cheak if a string include a spacfic word ?
let sentence = " yash is learning javascript with prabash";
let word = " javascript";
if (sentence.includes(word)){
    console.log("yas the word is include");
} else{
    "no the word is not included";
};

// 0.4 extract the world "world" from "hello world" ?
let exe = "hello world";
let sen = exe.slice(6);
console.log(sen);

// 0.5 what does str.trim () do ?
let tri = "       this is the trim method";
let res = tri.trim();
console.log(tri);
console.log(res);

// 0.6 Deffreance between slice() , substring() ?

let slic ="thisisthefeature";
let sub = "thisisthesubstring";
let result1 = slic.slice(4,10);
let result2 = sub.substring(4,10);

console.log(result1);
console.log(result2);

// 0.7 What does math.floor() do ?
let floo = 21.6;
console.log(Math.floor(floo));

// 0.8 Genrate a random number between 0 to 1 ?
let ran =(Math.random());
console.log(ran);

// 0.9 how do you get mixmum value from  [ 4,7,1,9]; ?
let numm = [4,7,1,9];
let max = Math.max(...numm);
console.log(max);

//0.10 What is the diffrance between math.round() and math.ceil() ?
let roun = 27.4;
let resu =Math.round(roun);
console.log(resu);

let cel = 27.4;
let rasu =Math.ceil(cel);
console.log(rasu);

// 0.11 Write a funcation to genrate a random interger between two value inclusive ?
function getran (min,max){
   min = Math.ceil(min);
   max = Math.floor(max);

   return Math.floor(Math.random()*(max-min +1)) +min ;
}
console.log (getran(1,10));
// 0.12 what is returned by the math.abs (-42) ?
let retu = -42;
console.log(Math.abs(retu));

//0.13 What is the diffrance between map () and foreach() ?
let numbers = [1,2,3,4,5];
let triple = numbers.map(num => num*3);
console.log(triple);

let name = ["aman","yash","bhoomi","radha"];
let uppername = name.map( name => name.toUpperCase());
console.log(uppername);

//0.14 how do you remove the last element of an array ?
let ele = ["remove","add","continue"];
ele.pop();
console.log(ele);

//0.15 write code to short an array of number in accending order ?
//( sort - it arrrange the numbesr and alphabates)

let nums = [9,6,2,3,47,8];
nums.sort((a,b) => a-b);

console.log("resulted array", nums);
  
// 0.16 What does array.splice() do ?
let ss = [10,20,30,40,50];
let conv = ss.splice(2);
console.log(conv);

//0.17 Use to reduce() to sum of an array of numbers ?
let value = [1,2,3,5,5,5];
let than = value.reduce;
console.log(than);
// 0.18 How to check if all iteam in an array are the numbers ?

// 0.19 How do you flatten a nested array [[1],[2],[3],[4]] ?
let nested = [[1],[2],[3],[4]] ;
let dd = nested.flat();
console.log(dd);

//0.20 How do you access the value of a property in an object ?
let person = {
    name:"sonu",
    age :20
};
console.log(person.name);
console.log(person.age);
//0.21 How do you loop through all key an objects ?


//0.22 whats the diffrance between dot notation and bracket notation ?
let personn = {
    name1:"prabash bhai"
} 
console.log(personn.name1);

let woman = {
    wname:"seema"
}

console.log(woman["wname"]);

//0.23 How do you salect an element by ID ?
let heading = document.getElementById("hd");
console.log(heading);
//0.24 What does the document.quarryselector('.class') returns ?

//0.25 How do you change the text content of a DOM element ?

//0.26 Whats the diffrance between inner text and textcontent and inner html ?


// Practice 5 may 2025
//ask the user of their age if it is grater than or equal to 18 with ternary operator and display the result in alert  ?
// let age = prompt("Emter your age buddy");
// age = Number(age);

// let massage= (age>=18)? "Your eligible" : "Your not eligble" ;
// alert(massage);

// // ask the user if they completed the course have a certifacte by (conform) . if both ok then give a "completed" massage by alert other wise not "completed" ?
// let complited = confirm("Have you complited the course");
// let hascertifacte = confirm("Do you have a certifacte");
// let massage= (complited && hascertifacte)?("Your course is complited buddy") : ("Your course is not complited and certifacte is not available");
// alert(massage);
// ask the user for the price of an iteam and (conform) whatever the have a discount copon .Apply a 10 % discount if they conform ?
// let price = prompt("What is the item price");
//     price = Number(price);
// let copon = confirm("Do you have discount copon");
// let final = copon ? price * 0.9 : price ;

// alert("final price is " + final.toFixed(2));

// // ask the user form their exam score and determine . if they passed or failed ( Above 33 passs)?
// let score = prompt("Enter your marks buddy");
// let result= (score>=33)? "Your passed in exam buddy" : "Your failed in exam buddy";
// alert(result);
// //check the number is even or odd ?
// let num = prompt("Enter the number buddy");
// let chek = (user%2)? "the num is even " : "the num is odd";
// alert(chek);
// Ask for conformation "are you sure to delete" if ok give massage "iteam deleted" otherwise "cancelled" ?
// let user = confirm("Are you sure to delete this");
// let give = user ? "iteam is deleted" :"cancelled";
// alert(give);
//Cheked entered number is positive or nagative ?
// let getnum = prompt("Enter the number");
// let conform = (getnum>0) ? "the number is positive" : "the number is nagative";
// alert(conform);
//print 1-10 number console by while loop ?
// let num = 1 ;
// while (num<=10){
// console.log(num);
// num++;
// };
 
// // // keep asking the user to input a number until they enter  a number grater than 10 . by do while loop ?
// let number ;
// do {
//     number = prompt("Enter the number buddy");
//     number = number(number);
// }
// while (number <= 10);
// alert ("Thank you ! You are entered.."+ number);

//
// let str = "yash";
// let str2 = "sing";
// let aloha = "yash" + " " + 23 + "kumar" +"sing"
// console.log(aloha)
// console.log(str,typeof str);
// console.log(str2,typeof str2);

// let a=10;
// let b=20;
// let c=30;
// let str1 = `number1 = ${a} number 2 = ${b} number 3 = ${c}`;
// console.log(str1);

// let gama = `str = ${2+3+4+5+6}`;
// console.log(gama);


// its a constructor method
// let str = new String("yash");
// console.log(str);

// strr = "hello  are you"
// str2 = "how are you"
// console.log(strr ,strr.length);
// console.log(str2 ,str2.length);

// let indi = "this is the index";
// console.log(indi[1])
// console.log(indi[5])
// console.log(indi[7])

// for (let ch of strr ){
//     console.log(ch);
// }

// for (let key of str){
//     console.log(key);
// }

// thes are string methods
 
// let str  = "hello how are you";
// let the = str.toUpperCase();
// let low = str.toLowerCase()
// let tr = str.trim();

// console.log(the);
// console.log(low);
// console.log(str);
// console.log(tr);

// let first = "manas";
// let middle = "kumar";
// let last = "lal";

// let fullname = `This is my full name ${first} ${middle} ${last}`;
// console.log(fullname);

// let the = "yashraj";
// // let chek = the.includes('d');
// // let ind = (the.indexOf('h'));
// // let chr = (the.charAt(0))
// let rep = (the.replace("yash" , "bhai"));
// // console.log(chek);
// // console.log(ind);
// // console.log(chr);
// console.log(rep);


// let user = "yashkumarlaal";
// console.log(user.slice(0,11));

let firstName = "yash";
const birthYear = 2000;
var isDevloper = true;

console.log(firstName,birthYear,isDevloper);

// premative data type 
let name2="yash"; // string
let age = 25; // number
let isStudent = true; // bollen
let address ; //undefinded
let empty = null; // null
let bigNum = 123456n; //Bigint

// nono parimative data type
let person2 = {name:"mohan",age:25,city:"jaipur"}; // object
let skills = ["html","css","javasvript"]; // array
function greet(){
    console.log("helo buddy");
} // it is funcation

console.log(name,age,isStudent,address,empty,bigNum);
console.log(person2,skills);
greet();

// operators 

// Arithmatic operators

// condational 
let val = 16;
if(val>=18){
    console.log("You are adult !")
} else{
    console.log("You are too young")
};

let score = 90;

if(score>=90){
    console.log("grade: A");
}else if (score >=75){
    console.log("Grade : B")
} else if (score>=50){
    console.log("Grade: C");
} else{
      console.log("Grade : D")
};

// switch statment 

let day = 2;

switch(day) {
    case 1:
        console.log("monday");
        break;
    case 2 :
        console.log("tuesday");
        break;
    case 3 :
        console.log("wednesday");
        break;
    case 4 :
        console.log("thursday");
        break;
    case 5 :
        console.log("friday");
        break;
    case 6 :
        console.log("saturday");
        break;
    default :
        console.log("try with valid number");  
};

let num = 7 ;
if(num%2===0){
    console.log("Even number")
}else{
    console.log("Odd number")
};

// loops in javascript 

// when you know how many times to loop
for(let i=1;i<=5;i++){
    console.log("count" ,i);
};

// while loop
let i = 1;
while(i<=3){
    console.log("number" ,i)
    i++;
};
//Do while loop
let l =1;
do{
    console.log("value",l)
    l++
} while(l<=3);

let fruits = ["apple","orange","mango"];

for(let fruit of fruits){
    console.log(fruit)
};

let man ={name:"ram",age:26,city:"raipur"};
for(let detail in man){
    console.log(detail)
} ;

for (let i =100; i>=1; i--){
    console.log(i)
}
















