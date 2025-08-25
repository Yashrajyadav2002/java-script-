

let array = {name:"yash",age:23 ,city:"bhopal"};

let showdata=()=>{
    localStorage.setItem("see data",JSON.stringify(array))
}

let get =()=>{
    localStorage.setItem(JSON.parse(localStorage.getItem("see data")))
};