let count=0
let intern
let start=()=>{
    intern=setInterval(()=>{
        console.log(count)
        count++;
    },1000)
}
let stopp=()=>{
    clearInterval(intern)
}
let res=()=>{
    count=0
}