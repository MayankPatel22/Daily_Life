const mycheck = document.getElementById("mycheck");
const button1 = document.getElementById("visabtn");
const button2 = document.getElementById("masterbtn");
const button3 = document.getElementById("paybtn");

const submit = document.getElementById("mysubmit");
const subresult = document.getElementById("sub");
const result = document.getElementById("result");

submit.onclick = function(){
    if(mycheck.checked){
        subresult.textContent = `You are subscribed`;
    }
    else{
        subresult.textContent =  `You are not subscribed`;
    }

    if(button1.checked){
        result.textContent = `You are paing with Visa`;
    }
    else if(button2.checked){
        result.textContent = `You are paing with Mastercard`;
    }
    else if(button3.checked){
        result.textContent = `You are paing with paypal`;
    }

}