// // // question number 0.1

// // let str = "javascript";
// // let latter = str.slice(0,3);
// // console.log("the latters are =",latter);

// // // question number 0.2
// // // Delete the first latter of a string ?

// // let str1 ="javascript";
// // let del = str1.slice(1);
// // console.log(del);

// // //question number 0.3
// // // short an array to string

// // let str2 = "aman";
// // let change = str2.split("");
// // console.log(change);

// // // question number 0.4
// // //how to remove line breaks from a string?
// // let line = " this is the line  \n  brake point";
// // let rep = line.replace( "\n " ,  " ");
// // console.log(rep);


// // //question number 0.5
// // //extrect a number from a string using javascript ?

// // let num = 1234;
// // console.log(num,typeof num);
// // let sup= num.toString();
// // console.log(sup ,typeof sup);


// // //question number 0.6
// // // convert string into date using javascript?

// // let datestr = "2006-05-29";
// // let dateobj = new Date (datestr);
// // console.log(dateobj);

// // //question number 0.7
// // // //insert a string at a spscific index ?
// // let original = "Hello yash";
// // let result = original.replace("dear");
// // console.log(result);

// // //question number 0.8
// // //how to find the longest word within the string in javascript ?

// // let str4 = prompt("enter the sentense comes with log and short words")
// // let words = str4.split(" ");
// // let longest ="";

// // for (let word of words){
// //     if (word.length > longest.length){
// //         longest = word;
// //     }
// // }
// // console.log("the longest word is ",longest);

// // //question number 0.9
// // //write a javascript program to find the prime number in a given array ?
// // let fun = [12434];

// // for (let item of fun){
// // for (var i =2; i<item; i++){
// //     if(item%i==0){
// //         break;
// //     }
// //     if(item==i){
// //         console.log(item);
// //     }
// // }
// // }


// // //question number 0.10
// // //write a program to find the smallest value in an array ?

// // let small =Math.min(10,20,30,40,-40);
// // console.log(small);


// // //question number 0.11
// // //write a program to find the sum of value of an array ?

// // let arr = [1,2,3,4,5];
// // let sum = 0;

// // for (let i = 0; i<arr.length; i++){
// // sum +=arr[i];
// // }
// // console.log("sum of the array is",sum);


// // // question number 0.12
// // // // write a program to check the given srting is a palindrom or not ?
// // function palindrome(data){
// //     const str =data.toString();
// //     const reversed =str.split('').reverse().join('');
// //     return str === reversed;
// // }

// // const value = 131;
// // if(palindrome(value)){
// //     console.log(`${value} is a palindrone number`);
// // }else{
// //     console.log(`${value} is not a palindrone number `);
// // }


// // // question number 0.13
// // //write a javascript program to find current age of any person by using his/her data of birth ?

// // function agesystem (birth){
// //     const birthtarik = new Date(birth);
// //     const dateDi = Date.now() - birthtarik.getTime();
// //     const ageofyear = new Date(dateDi);
// //     return Math.abs(ageofyear.getUTCFullYear()-1970);
// // };
// // const DateOFBirth = "1948-06-02";
// // console.log("his / him Date OF Birth is",agesystem(DateOFBirth));

// // // question number 0.14
// // // //how to caluclate the yesterday date in javascript ?
// // const today = new Date();
// // const yesterday = (today.getDate()-1);
// // console.log(yesterday);

// // //question number 0.15
// // // write a javascript program to find the given year is leap year or not ?
// //     let year = prompt("enter the year");

// // if(year%4===0 && year%400===0){
// //     console.log("the year is leap year");
// // }
// // else{
// //     console.log("the year is not a leap year");
// // };

// // !!!!!!!!!!!!!!!! here the new practice questions !!!!!!!!!!!!!!!!!!!!!!!!!!!!1

// //0.1 take two input , create 4 buttons (add,sub,mul,div) if user click any button so that operation will perform ?


// //0.2 wap to replace all google to cybrom "welcome to the google", bhopal we are google student we learn js in google?

let text = "welcome to google bhopal, we are google student we lwarn js in google ";

let newtext = text.replace(/google/,"cybrom");

console.log(newtext);

// 0.3 wap to change the baground color of body with click on buttons {green,black,orange}?

 function changeTheme(bgColor, textColor) {
      document.body.style.backgroundColor = bgColor;
      document.body.style.color = textColor;
    }

    // Add event listeners to buttons
    document.getElementById("greenBtn").addEventListener("click", function() {
      changeTheme("green", "white");
    });

    document.getElementById("blackBtn").addEventListener("click", function() {
      changeTheme("black", "pink");
    });

    document.getElementById("orangeBtn").addEventListener("click", function() {
      changeTheme("orange", "black");
    });


// //0.4 #genrate a random password with javascript?
function getpass(length = 12){
    const number ="12345678910";

    let password = "";
    for (let i = 0; i<length; i++){
        const randomindex = Math.floor(Math.random()*number.length);
        password += number[randomindex];
    }
    return password;
}
const randompassword = getpass(8);
console.log("genrated password",randompassword);





// //0.5 wap to destructure of array and find multiplaction of it only 7 elements. using js ?

const numbers = [2,3,4,5,6,7,8,9,10];

const [a,b,c,d,e,f,g] = numbers;

const multiplaction = a*b*c*d*e*f*g;

console.log("multiplaction of first elemnets",multiplaction);
   


// !!!!!!!!!!!!!!! its question time !!!!!!!!!!!!!!!!!!!!!!!!!!

// question 0.1 how do you find the length of a string ?

let s = "who are you man";
console.log ;

function getlastelement(localArr){

    return localArr[localArr.length -1]
};
    let arry = [1,2,3,4];
    
    let lastelement = getlastelement(arry)
    console.log(lastelement)
    console.log(arry);

// .2 find the combination of two arrays ? (using spread operator)

let arr1 = [1,2,3,4];
let arr2 = [5,6,7,8];

let combin = [...arr1 , ...arr2];
console.log(combin);

// genrate a random integer between 0 to 18 ?

let ab = Math.floor(Math.random()*19);
console.log(ab);

// create a funcation 

let arr = [1,2,3,'m','n',5];

let result = arr.filter(element=>{
    if (typeof element === 'String'){
        return true;
    }else{
        return false;
    }
})
console.log(result);

// .5 find the max num in arry ?
let aruu = [12.15,17,0];
let max = Math.max(...aruu);
console.log(max);

//0.7

let persons = [
    {
        name:"yash",
        age:23
    },
    { name:"aman",
        age:24,
    },
    {
        name:"raja",
        age:23,
    },
]
 let ree = final = persons.filter(obj=>
 {
    return obj.age === '23'
 });

 console.log(ree);
 

