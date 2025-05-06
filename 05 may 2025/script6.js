//    MATH TYPE OBJECTS 

// floor - returns the lower value

let a= Math.floor(5.6780);
console.log(a);

//ceil - returns the upper value 

let b = Math.ceil(3.6544);
console.log(b);

//trunc - returns the integer value

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

let h = Math.random()+1;
console.log(h);




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


const day = D.getDay();
console.log(day);


const date = D.getDate();
console.log(date);

const hour = D.getHours();
console.log(hour);

const mini = D.getMinutes();
console.log(mini);

const sec = D.getSeconds();
console.log(sec);

