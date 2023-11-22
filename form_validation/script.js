const handleSubmit=(e)=>{
    e.preventDefault();
    const username=document.getElementById('username').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    const age=document.getElementById('age').value;
    const destination=document.getElementById('destination').value;
    const msg=document.getElementById('msg');
    if(username==="" || email==="" || password==="" ||age==="" || destination===""){
        msg.innerHTML="Enter all the fields";
        return;
    }
    if(username.length < 5){
        msg.innerHTML="Enter valid username";
        return;
    }
    if(password.length < 5){
        msg.innerHTML="Enter strong password";
        return;
    }
    if(age < 18){
        msg.innerHTML="You are not eligible to Book tickets ";
        return;
    }
    let reg=/^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
    if(!reg.test(email)){
        msg.innerHTML="Enter valid email address";
        return;
    }
    window.location.href = "./thankyou.html";
}

let form=document.querySelector('form');
form.addEventListener('submit',handleSubmit);

let reg=/^[a-zA-Z0-9]+@[a-zA-Z]+.\[a-zA-Z]{2,}$/