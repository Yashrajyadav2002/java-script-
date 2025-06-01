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

// let daynum = 2;
//  switch (daynum){
//     case 1: 
//     console.log("monday");
//     break;
//     case 2: 
//     console.log("tuesday");
//     break;
//     case 3: 
//     console.log("wednesday");
//     break;
//     case 4: 
//     console.log("thursday");
//     break;
//     case 5: 
//     console.log("friday");
//     break;
//     case 6: 
//     console.log("saturday");
//     break;
//     case 7: 
//     console.log("sunday");
//     break;

//     default:
//         console.log("invalid day number");
//  }

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


    //!!!!!!!!!!!!!! Funcation !!!!!!!!!!!!!!!!!!
    //funcation decleration
    function greet (){
      console.log("hello yash");
    }
    greet();

    // funcation with parameter

    function greetuser(name){
      console.log("Hello, " + name + "!");
    }
    greetuser("yash");


    function userji (name){
      console.log("hello, " + name + "!");
    };
    userji("betu");

    // funcation with return value 

    function add (a,b){
      return a+b;
    }
    let final = add(5,3);
    console.log(final); //8

    function area(a,b){
      return a*b;
    }
    let totalarea=area(5,4);
    console.log(totalarea);

//  function Expression 
    const multply = function(x,y){
      return x * y;
    };
    console.log(multply(6,7)); // 42

    const divide = function(x,y){
      return x / y ;
    };
    console.log(divide(6,2));

    // Arrow funcation 
    const subtract = (a,b) => a-b;
    console.log(subtract(5,10));

    function getmax(a,b){
      return a>b ? a : b;
    }
    console.log(getmax(16,15));

    // chek the num is even or odd ?

    function chekevenodd(num){
      if(num % 2 ===0){
         console.log("Even");
      }else{
         console.log("odd");
      }
    }
    chekevenodd(24);

    // funcation for power number ?
    function powernum (base,exponent){
      return base**exponent;
    }
    let next = powernum(2,3);
    console.log(next);

    // write a funcation celsious to fahrenhite ?

    function celcious (celcious){
      return F = (celcious * 9/5) +32;
    }
    let last =celcious(0);
    console.log(last); // 32 ;

    //chek the num is prime or not ?

    function isprime (num){
      if (num <=1) return false;

      for (let i = 2; i<=Math.sqrt(num); i++){
         if (num % i ===0){
            return false;
         }
      }
      return true;
    }
    console.log(isprime(7));
    console.log(isprime(10));

    // caluclator project

    function add  (a,b){
      return a+b;
    };
    function subtracte(a,b){
      return a - b ;
    }
    function multplyy(a,b){
      return a * b ;
    }
    function division (a,b){
      if (b === 0){
         return "cant divide by zero"
      }
      return a / b ;
    }

    function calculator (a,b ,operator){
      switch (operator){
         case '+':
            return add (a,b);
            case'-':
            return subtract (a,b);
            case '*':
            return multplyy (a,b);
            case '/':
            return division (a,b);
            default:
               return "invalid operator !";
            }
      }
      console.log(calculator(10,5, "+"));
      console.log(calculator(10,5, "-"));
      console.log(calculator(10,5, "*"));
      console.log(calculator(10,5, "/"));
    


      // lest talk about array concepts 
      // what is array  and array accessing and properties

      let fruits = ["apple","orange","banana"];
      console.log(fruits[1]);
      console.log(fruits);
      console.log(fruits.length);

      // now we talking about array methods 

      for (let i = 0; i<fruits.length;i++){
         console.log(fruits[i])
      }
      fruits.forEach(function(fruits){
         console.log(fruits)
      });

      let arr =[10,20,30,40,50];
      for(let i =0; i <arr; i++){
      
      }
      console.log(arr);
      
      // calculate the total numebr of sum ?
      let number =[5,10,15,20];
      let sum =0;
      for(let i=0;i<number.length; i++){
         sum= sum+number[i];
      }
      console.log("sum is",sum);

      // find the samlest number using a loop ?

      let numss =[23,65,87,45,900];
      let min = numss[0];
      for(let i =1 ;i >numss.length; i++){
         if(numss [i] >  min) {
            min = numss[i];
         }
      }
      console.log("samllest num is",min);

      let mine =Math.min(...numss);
      console.log("the num is",mine);

      // find the  largest number using a ;loop ?
      let numr =[23,65,87,45,900];
      let max = numr[0];
      for(let i =1 ;i <numr.length; i++){
         if(numr [i] > max) {
            max = numr[i];
         }
      }
      console.log("largest num is",max);

      let maxi = Math.max(...numss);
      console.log("the num is",maxi);


      // lets count how many numbers are even ?

      let datas =[3,6,9,12,15,18];
      let count = 0;

      for (let i =0 ; i<datas.length; i++){
         if (datas [i] % 2 ===0) {
            count++;
         }
      };
      console.log("Total even number are",count);


  //  With the help of for each and funcation method ?

  let count1 =0;
  datas.forEach(num =>{
   if (num%2===0){
      count1++;
   }
  })
  console.log("this is the value",count1)

  // reverse the number using loop (not use the . reverse method) ?



