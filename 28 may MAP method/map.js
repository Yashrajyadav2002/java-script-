// wap to create a list with the help of funcation ?

const fruits = ["apple","grapes","orange","mango"];

let text = "<ul>";

fruits.map(function (x){
    text += `<li>${x}</li>`;

});
text += "</ul>";

document.getElementById("demo").innerHTML=text;

// wap to create a table with map funcation ?

const person1 = [
    {
    name:"yash",
   age:23},
  {
    name:"prabash",
   age:25},
];

let table = `
<table border=1px>
<tr>
<th>name</th>
<th>age</th>
</tr>`;

person1.map((x) => {
    table += `
    <tr>
    <td>${x.name}</td>
    <td>${x.age}</td>
    <tr>`;
});

table += "</table>";

document.getElementById("mytable").innerHTML = table;

//!!!!!!!!!!!!!!1 FILTER !!!!!!!!!!!!!!!- it filter the values 

const numbers = [1,20,30,40,50,];

const newNumbers = numbers.filter(function(x){
    if (x>20){
        return x ;
    }
});

console.log(newNumbers);

const student = [
    {name:"jhon", grade:96},
    {name:"aman", grade:80},
    {name:"mukesh", grade:70},
    {name:"maar", grade:60},
    {name:"thal", grade:90},
    {name:"afani", grade:95},
];

const studentgrade = student.filter(function(x){
    if (x.grade>= 70){
        return x ;
    }
});

console.log(studentgrade);

// the filter () method takes each element in an array 