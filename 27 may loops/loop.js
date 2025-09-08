
// print the odd num ?
for (let i = 0; i<100; i++){
if (i%2===0){
    console.log(i);
}
};

let i;
while(i<=100){
console.log(i);
i++;
};

let h=11;
do{
    console.log(h);
    h++;
}
while(h<10);

//the javascript for in statment loops through the properties of and object 
// for in loop ?
const person ={
    name:"yash",
    age:23,
    city:"banglore",
};

for (let x in  person){
    console.log(person[x]);
}

//for array  (specily use for objects)
// in  (for in loop) x denots thge index number of an array

const num = [1,2,3,4,5,6,7,8,9];

for (let x in num){
    console.log(num[x]);
}

// for of loop !!!!!!!!!!!!

// in for of loop x denote the element in of the array

const arry1 = [100,200,300,400];

for (let x of arry1){
    console.log(x);
}


let str = "javascript";

for (let x of str){
    console.log(x);
}

// for each in  loops !!!!!!!!!!!!!!
// its a call back funcation for each element 
 const numb =[10,20,30,40];

let txt ="";

 numb.forEach(myfuncation);
 function myfuncation(x){
    txt += x + " ";
 }
 console.log(txt);


 // print the squire of array objects ?
 const numc =[10,20,30,40];

let text ="";

 numc.forEach(myfuncation1);
 function myfuncation1(x){
    text += x*x + " ";
 }
 console.log(text);

 // !!!!!!!!!!!!!! MAP METHOD !!!!!!!!!!!!!!

 // the map() method is use for creating a new array from an existing one . applying a funcation to each one of the element of the array .

 const num1 =[1,2,3,4,5];
 const newArray = num1.map(myfuncation2);

 function myfuncation2(x){
    return x*x;
 }
console.log(newArray);
 
 


// for each in  loops !!!!!!!!!!!!!!
// its a call back funcation for each element 
 const numb1 =[10,20,30,40];

let txt1 ="";

 numb.forEach(myfuncation);
 function myfuncation(x){
    txt += x + " ";
 }
 console.log(txt);


 // print the squire of array objects ?
 const numc2 =[10,20,30,40];

let text2 ="";

 numc.forEach(myfuncation1);
 function myfuncation1(x){
    text += x*x + " ";
 }
 console.log(text);

 // !!!!!!!!!!!!!! MAP METHOD !!!!!!!!!!!!!!

 // the map() method is use for creating a new array from an existing one . applying a funcation to each one of the element of the array .

 const num2 =[1,2,3,4,5];
 const newArray2 = num1.map(myfuncation2);

 function myfuncation2(x){
    return x*x;
 }
console.log(newArray);
 
 


