// life (imedetly invoked funcation)

(function (){
    var x = "hello";
    console.log(x);
})();

(function (){

    let name = prompt ("enter your name");
    let age = prompt ("enter your age");
    let city = prompt ("enter your city");
    
console.log(name);
console.log(age);
console.log(city);
    
})();

//when a web page is loaded in browser it converts the html document into dom (document object model)
//DOM is a tree of element 
// in witch all the elements trated like objects 

// function start (num){
//     if (num%2===0 || num%400===0){
//         console.log("right")
//     } 
//     else{
//         console.log("Wrong")
//     }
// }
// start(2);

// when we pass the c value its a optional we can change it to give it a real value
function system (a,b , c = 5){
    return a+b+c ;
}
result1 = system(5,3);
result2 = system(9,3);
result3 = system(10,3 ,2);
result4 = system(11,3);

console.log("this is the sum of num is",result1);
console.log("this is the sum of num is",result2);
console.log("this is the sum of num is",result3);
console.log("this is the sum of num is",result4);

// repeact
// when we pass the c value its a optional we can change it to give it a real value
function system (a,b , c = 5){
    return a+b+c ;
}
result1 = system(5,3);
result2 = system(9,3);
result3 = system(10,3 ,2);
result4 = system(11,3);

console.log("this is the sum of num is",result1);
console.log("this is the sum of num is",result2);
console.log("this is the sum of num is",result3);
console.log("this is the sum of num is",result4);

