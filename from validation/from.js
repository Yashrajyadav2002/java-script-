
let validate=()=>{
    let name = document.querySelector("#name").value.trim();
    let Email = document.querySelector("#email").value.trim();
    let num = document.querySelector("#number").value.trim();
    let pass = document.querySelector("#pass").value.trim();
    let copass = document.querySelector("#copass").value.trim();


    let errorname = document.querySelector("#errorname");
    let erroremail = document.querySelector("#erroremail");
    let errornumber = document.querySelector("#errornumber");
    let errorpass = document.querySelector("#errorpass");
    let errorcopass = document.querySelector("#errorcopass");

    if(name==""){
        errorname.innerHTML="plese enter Name";
        errorname.computedStyleMap.color="red";
        return false;
    }

    else if(Email==""){
        erroremail.innerHTML="Plese enter vaild email";
        return false;
    }

    else if(num.length!==10){
        errornumber.innerHTML="Plese enter a valid number";
        return false;
    }

    else if(isNaN(num)){
        errornumber.innerHTML="please enter number only";
        return false;
    }
    else if(Email.include("@" && Email.include(".com"))){
        return false;
    }

    else if (pass!=copass){
        errorcopass.innerHTML="please enter same password"
        document.querySelector("#copass").value="";
        document.querySelector("#copass").focus()
        return false;
    }

    else if (! (pass.match(/[1234567890]/)) &&
            pass.match(/[!@#$%^&*()_]/) &&
            pass.match(/[a-z]/) &&
            pass.match(/[A-Z]/)
)
{
    errorpass.innerHTML="Plase enter the stron password"
    return false;
}
};
