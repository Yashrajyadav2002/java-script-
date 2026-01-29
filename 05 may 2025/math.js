//    MATH TYPE OBJECTS 

// floor - returns the lower value

let a= Math.floor(5.780);
console.log(a);

//ceil - returns the upper value 

let b = Math.ceil(3.44);
console.log(b);

//trunc - returns the integer value . it avoid the point values

let c = Math.trunc(2546.365);
console.log(c);

//MIN - returns the minium value

let e = Math.min(35,19,29,59,99,89,78);
console.log(e);

//MAX - returns the maximum value 

let f = Math.max(56,58,77,99,35,36);
console.log(f);

//POW - returns the power value

let g = Math.pow(3,3);
console.log(g);

// RANDOM = returns the random value

let h = Math.random()+2;
console.log(h);

// ROUND - it returns the roundfigure value of integer
let i = Math.round(67.54);
console.log(i);




let x = Math.random() * 51 +1;
let y = Math.random() * 101 + 1;

 let sum = x+y;
 console.log(sum);

 let div = x/y;
 console.log(div);
 
 let multi = x*y;
 console.log(multi);

 let min = x-y;
 console.log(min);

//      DATE TYPE OBJECTS 

// by defult javascript will use the browser time line and display the date in string

let d = new Date();

console.log(d);

// there are four ways to create object in date object

let D =new Date(2025,4,3,25,36,10);
console.log(D);

let z=Date(468541684);
console.log(z);

// methods of date

const year = D.getFullYear();
console.log(year);


const month = D.getMonth();
console.log(month);


const day = D.getDay("2");
console.log(day);


const date = D.getDate();
console.log(date);

const hour = D.getHours();
console.log(hour);

const mini = D.getMinutes();
console.log(mini);

const sec = D.getSeconds();
console.log(sec);


// its a practice time for math methods
// question no 0.1
let aa = Math.floor(4.9);
console.log(aa); // 4 ;

//question no 0.2
let bb = Math.round(9.656);
console.log(bb);// 10; // upword

// question no0.3
let cc = Math.ceil(99.40);
console.log(cc); // 100;

// question no 0.4
let dd = Math.min(7,2,10,0);
console.log(dd); // 0;

// question no 0.5
let ee = Math.max(7,2,10,0);
console.log(ee); // 10;

//question no 0.6
let ff =Math.random()*101 +1;
console.log(ff); // done ;

// quection no 0.7
let gg = Math.trunc(-4.9);
console.log(gg); // -4 ;

// question no 0.8
let hh = Math.pow(5,3);
console.log(hh); // 125 ;

// you have an arry of prices finn the minimum and maximum values ?
let prices = [19.99,9.5,12.75,25.3];
let max = Math.max(...prices);
let min1 = Math.min(...prices);

console.log(max);
console.log(min1);

// write a funcation that returns random integer any to given number ?
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min + 1)) + min ;
}
console.log(getRandom(10,20));

// squire root ?

let jj = Math.sqrt(81);
console.log(jj); // 9

// write a funcation that samulates a 6- sided dice roll using math . random method ?

function randomDice(){
    let dise =Math.floor(Math.random()*6)+1;
    console.log(dise);
}
randomDice();

// ROund the number 9.656 to :
// a . the nearest whole number 
// b . upword
// c. downword

console.log(Math.round(9.656));
console.log(Math.ceil(9.656));
console.log(Math.floor(9.656));

// 

// with using (ceil)
let value1 = Math.random();
function getRandom(min,max){
    return Math.ceil(Math.random()*(max - min )) + min ;

}
console.log(getRandom(10,50));


let sing = Math.random();
let res = (Math.floor(9000*(sing)+1000));
console.log(res);


console.log(Math.floor(Math.random()*6+1));


//  repeact

// ROund the number 9.656 to :
// a . the nearest whole number 
// b . upword
// c. downword

console.log(Math.round(9.656));
console.log(Math.ceil(9.656));
console.log(Math.floor(9.656));

// 

// with using (ceil)
let value2= Math.random();
function getRandom(min,max){
    return Math.ceil(Math.random()*(max - min )) + min ;

}
console.log(getRandom(10,50));


let sing1 = Math.random();
let res1 = (Math.floor(9000*(sing)+1000));
console.log(res);


console.log(Math.floor(Math.random()*6+1));


//question practice

// its a practice time for math methods
// question no 0.1
let aa1 = Math.floor(4.9);
console.log(aa); // 4 ;

//question no 0.2
let bb1 = Math.round(9.656);
console.log(bb);// 10; // upword

// question no0.3
let cc1 = Math.ceil(99.40);
console.log(cc); // 100;

// question no 0.4
let dd1 = Math.min(7,2,10,0);
console.log(dd); // 0;

// question no 0.5
let ee1 = Math.max(7,2,10,0);
console.log(ee); // 10;

//question no 0.6
let ff1 =Math.random()*101 +1;
console.log(ff); // done ;

// quection no 0.7
let gg1 = Math.trunc(-4.9);
console.log(gg); // -4 ;

// question no 0.8
let hh1 = Math.pow(5,3);
console.log(hh); // 125 ;


//repeat 
// methods of date

const year1 = D.getFullYear();
console.log(year1);


const month1 = D.getMonth();
console.log(month1);


const day1 = D.getDay("2");
console.log(day1);


const date1 = D.getDate();
console.log(date1);

const hour1 = D.getHours();
console.log(hour1);

const mini1 = D.getMinutes();
console.log(mini1);

const sec1 = D.getSeconds();
console.log(sec1);







