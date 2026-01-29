const scrollReveal = ScrollReveal();

const ScrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

scrollReveal.reveal(".header_div h1", {
    ...ScrollRevealOption,
});

scrollReveal.reveal(".header_form", {
    ...ScrollRevealOption,
    delay: 500,
});

scrollReveal.reveal(".destination_card", {
    ...ScrollRevealOption,
    interval: 500,
});

scrollReveal.reveal(".reviews_card", {
    ...ScrollRevealOption,
    interval: 500,
});

function validatefunc(){
    let x = document.forms["myForm"]["femail"].value;
    let errorMessage = document.getElementById("error-message");
    errorMessage.innerHTML="";

    if (x === ""){
        errorMessage.innerHTML = "This field must be filled.";
        return false;
    }
    else{
        return true;
    }
}

function validateform(){
    let x = document.forms["myForm"]["fpass"].value;
    let y = document.forms["myForm"]["frepass"].value;
    let errorMessage1 = document.getElementById("error-message1");

    errorMessage1.innerHTML = "";
    
    if (x !== y ){
        errorMessage1.innerHTML = "password does not matches."
        return false;
    }
    else if(x == ""){
        errorMessage1.innerHTML = "password does not matches."
        return false;
    }
    else{
        return true;
    }

}

function validateAll(){
    let isEmailValid = validatefunc();
    let isPasswordValid = validateform();

    return isEmailValid && isPasswordValid;
}