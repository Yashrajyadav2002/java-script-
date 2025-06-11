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