//  these are literal methods in number declrition 
let num = 12345;
let num1 = "12345";
let num2 = '12345';
console.log(num , typeof num);
console.log(num1 , typeof num1);
console.log(num2 , typeof num2);

//constructor method in numbers 
// it allways a number in any condition
let num3 = new Number (123456);
console.log(num3);
 // we chek the it is integer or not

 let val = 123.456;
 console.log(Number.isInteger(val));

 // parseint -  we can change the value  float into  integer?
 let val1 = 125.56;
 console.log(Number.parseInt(val1));
 
 // parsefloat - we can change the value integer into float
 let val2 = '125.384px';
 console.log(Number.parseFloat(val2));

 // isfinite - we can chek the infinte vale ?

 let infi = 1/0;
 console.log(Number.isFinite(infi));

 // number instance method // used on number premative?
   
// (toFixed) - it take the value after the point ?

let fix = 123456;
console.log(fix.toFixed(3));

// toexponstional - 

// precision - it return the pre size value (round figer value)

let pree = 123.46;
console.log(pree.toPrecision(3));


// tostring -  it convert the number into string ?

let str = 1234;
console.log(str.toString().length);



