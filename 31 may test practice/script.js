let studentNmae ="yash";
let marks = 98.9;
let ispassed = true;
let address ;
let nothing =null;
let numbers = [1,2,3,4,5];

console.log( studentNmae,marks,ispassed,address,nothing,numbers );

// questions fro data types

let favrouatecolour = "purple";
console.log(favrouatecolour);

let birthyear = 2003;
console.log(birthyear);

let ilovecoading = true;
console.log(ilovecoading);

let myhobbies = ["gaming ","advanture","movies"];
console.log(myhobbies);

let details = {
    name:"yash",
    age:23,
    city:"london",
};

console.log(details);

let x;
console.log(x);

// operators questions 

let x1 =5;
x1 += 2 + 3 ;
console.log(x1); // 10 

let a = "10";
let b = 10;
 console.log(a==b); //true
 console.log(a===b);// false

 let islogined = true;
 let hastoken = false;

 if(islogined && hastoken){
    console.log("acess the man")
 }else{
    console.log("get out")
 };

 let a1 =8;
 let b1 =3;

 let result = (a+b) >10 && (a-b) < 10;

 console.log(result);

 let username = "yash";
 let password = "12345";

 if(username==="yash" && password==="12345"){
    console.log("Login successful");
 }else{
    console.log("Login failed");
 };

 // condational operators 

 let num = 0;

 if(num<0){
    console.log("nagative number");
 }else if (num>0){
    console.log("positive number")
 }
 else{
    console.log(" zero number")
 };

// write a program that assigns the garde on marks ?

let mark = 90;

if(mark>=90){
    console.log("in the A grade");
}else if(mark>=75){
    console.log("in the B grade");
}else if(mark>=50){
    console.log("in the C grade");
}else{
    console.log("in the F grade");
};

// write a program it show the day by the number ?

let daynum = 2;
 switch (daynum){
    case 1: 
    console.log("monday");
    break;
    case 2: 
    console.log("tuesday");
    break;
    case 3: 
    console.log("wednesday");
    break;
    case 4: 
    console.log("thursday");
    break;
    case 5: 
    console.log("friday");
    break;
    case 6: 
    console.log("saturday");
    break;
    case 7: 
    console.log("sunday");
    break;

    default:
        console.log("invalid day number");
 }

 // write a program to chek the eligblelity to driving ?

 let age = 15;

 if(age>=18){
    console.log("You can drive");
 }
 else if (age>=16){
    console.log("You can learn driving");
 }
 else{
    console.log("Too young to drive");
 };

 //write a program to chek the num is even or odd ?

 let nums = 22;

 if(nums%2===0){
    console.log("the number is even");
 }
 else{
    console.log("the number is odd")
 };

 // loops in javascript 

 // (FOR LOOP)
 for (let i=1;i<=5;i++){
    console.log("hello",i);
 }

 // while loop 
 let i =1;
 while(i<=3){
    console.log("count",i);
    i++;
 }

 // for ... in loop 
 let user ={name:"yash",age:23,city:"banglore"};
 for(let key in user){
    console.log(key,"=",user[key]);
 }

// for ..of loop over on arrays
let items =["car","bus","motor","jeep"];
for(let travel of items){
    console.log(travel,"==",items[travel]);
}

// for ..in loop over object keys
let item =["car","bus","motor","jeep"];
for(let travel in item){
    console.log(travel,"==",item[travel]);
}

// print number 1 to 10 ?
for(let i=1;i<10 +1;i++){
    console.log(i);
}

// find the sum of numbers using while loop ?

// let i1 = 1+2+3+4+5;

// while(i1<);

    // print the element of an arry withe the help of for.... of loop ?

    let cars = ["BMW","Audi","Mercedes","Tata"];
    for(let print of cars){
        console.log(print,"=",print[cars]);
    }

    // print the object things ?

    let data = {name:"harsh",age:26,city:"amritsar"};
    for(let now in data){
        console.log(now,"=",data[now]);
    }



