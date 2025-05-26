// its a practice time for date object method in java script

// 0.1 how do you create a new date object with the curent date and time ?
let a = new Date();
console.log(a);

// // question no 0.2
// let d = new Date("2022-05-25");
// console.log(d.getfullyear());

// how to get current day of  a week ?
 let today = new Date();
 let day = today.getDay();
 console.log(day); // i have dout

 // how to get the hours from a date objest ?

 let time = new Date();
 let hours = time.getHours();
 console.log(hours);

 // display date in 25-may-2025 format ?

 let value = new Date("2025-05-25");
 let day1 = value.getDate();
 let monthNames = ["jan","feb","mar","apr","may","june","jul","aug","sep","oct","nov","dec"];

 let month = monthNames[value.getMonth()];
 let year = value.gerFullYear();
 let formattedDate = `${day1}-${month}-${year}`;

 console.log(formattedDate);

