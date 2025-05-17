// type of funcation
// there are four thype of funcation
//.1 no return no parameter

function display1(){
    console.log("hlo yash");
}
display1();

//.2 returns with no parameter

function display2(){
    return "Hello yash";

}
let result = display2()
    console.log(result);
// alert(result);

//.3 parameter with no returns

function display3(x,y){
    console.log(x*y);
}
 display3(20,20);

 //.4 parameter with return

 function display4(x,y){
    return x + y;
 }
 let ans = display4(10,20);
 console.log(ans);

 // 
 
// function display5(){
//     a = prompt ("enter name");
//     console.log(a);
// }
// display5();

function hlo(){
    return "who are you";
}
let hii = hlo();
console.log(hii);

// a funcation thta will print qubie of a number

function qube(x){
    console.log(x*x*x);
}
qube(20);

// find the squree
function squr(x){
    console.log(x*x);
}
squr(20);

//

function iam(person){
    console.log(`person name is ${person.name} and age is ${person.age}`)
}
iam({
name:"yash",
age:23,
});

// funcation expression
 let myfuncation = function(){
    console.log("whats going on there");
 }
 myfuncation();

 //make a question using funcation expression
let sub = function(x,y){
    console.log(x-y);
}
sub(10,20);

// arrow funcation
let my = ()=>{
    console.log("i under stand this");

}
my();
