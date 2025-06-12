function calculatesum (){
    const num = parseInt(document.querySelector("#inputnumber").value);

    let sum =0;

    if(isNaN(num) || num<1){
        document.querySelector("#result").innerText = "plese enter avalid number grater than 0";
        return ;
    }

    for(let i = 1; i<=num; i++){
        sum+=i;
    }

    document.querySelector("result").innerText = `the sum from 1 to ${num} is ${sum}`;
};

let subject = "";

function asksubject(){
    subject = prompt("What is your favorite subject");
}

function showsubject(){
    document.querySelector("#result").innerHTML =  subject;
};

let store = "";
function asksentance(){

    store = prompt("enter your sentance");
    document.querySelector("#show").innerHTML = "Your sentance is :" + store.toUpperCase();

};

let fun = "";

function word(){
    fun = prompt("enter the word");
    document.querySelector("#display").innerHTML = "this is your word :" + fun;

    if(fun.includes('ing')){
        document.querySelector("#display").innerHTML = "yas" ;
    }else{
        document.querySelector("#display").innerHTML = "no" ;
        
    }
};
//question number 0.8
let what = "";

function graternum(){
    what = prompt("Enter the number buddy");
    document.querySelector("#this").innerHTML= what;

    if (what>=100){
        document.querySelector("#this").innerHTML="Number is grater than 100";
    }else{
        document.querySelector("#this").innerHTML="Number is not grater than 100";
    }
};
 
//question number 0.10
let fruits = ["apple","banana","mango","orange"];

function displayfruits(){
    document.querySelector("#change").textContent=fruits.join(", ");
};

function diffrent(){
    fruits.pop();
    displayfruits();
}
displayfruits();

//question number 11
let color = "";
function favorite(){
    color =prompt("enter the color name");
    document.querySelector("#colorinput").value;
    document.body.style.backgroundColor = color;
};

const images = ["ac.jpg","fridge.jpg","knife.jpg"];

let currentindex = 0;

function showimage(index){
    document.querySelector("#gallery").src = images[index];
}
function shownext(){
    if (currentindex <images.length -1){
        currentindex++;
        showimage(currentindex);
    }
}

function showprevious(){
    if (currentindex>0){
        currentindex--;
        showimage(currentindex);
    }
}

//next question 04
let counterelement = "";
let value="";
function increment(){
     counterelement = document.querySelector("#counter");
     value = parseInt(counterelement.innerHTML);
                counterelement.innerHTML = value +3;
}
function decrement(){
       counterelement = document.querySelector("#counter");
       value = parseInt(counterelement.innerHTML);
               counterelement.innerHTML = value - 3;
};

// question number 0.9
document.querySelector("#output").innerHTML =  "javascript is amazing , learning javascript is fun" . replace(/javascript/gi,"mearn");