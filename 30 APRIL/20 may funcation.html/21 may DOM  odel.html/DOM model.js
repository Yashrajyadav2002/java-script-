// these are the methods of DOM 

// element get by (ID)

// let h1 = document.getElementById("demo");


// element get by (TAG NAME);

// let h1 = document.getElementsByTagName("h1");

// console.log(h1[0]);

// let h1 = document.getElementsByClassName("head");
// console.log(h1[0]);

// let h1 = document.querySelector(".head");
// // console.log(h1);

// let h1 = document.getElementById("demo");
// h1.innerText = "hello world";

// // let name = prompt("enter name");
// let h1 = document.getElementById("demo2");
// // h1.innerText=name
// h1.innerHTML = `<p> HI who are you bro</p>`;

// let h1 = document.getElementById("demo2");
// h1.innerHTML = `<table border>
// <tr>
//     <th>name</th>
//     <th>age</th>
// </tr>
// <tr>
// <td>yash</td>
// <td>23</td>
// </tr> </table>`;

// let img = document.getElementById("my");
// img.src = "bugati.jpg";

let h1 = document.getElementById("demo");
h1.style.color="red";
h1.style.backgroundColor="yellow";
let para = document.getElementById("para");
para.style.color="blue";
para.style.backgroundColor="hotpink";
para.style.border="10px solid black";
para.style.borderRadius="1px";
para.style.fontSize="19px";
para.style.fontStyle="italic";
function change(){
let Input = document.getElementById("myinput");
Input.value="doom 5";

}
function some(){
let loc = document.getElementById("myinput").value;
document.getElementById("head").innerText=loc;

}
// add event listner() method atteches an event heafdler to the specfied element in 

let h1 = document.getElementById("demo");
somthing.addEventlistener("click",function(){
    console.log("button click");
})