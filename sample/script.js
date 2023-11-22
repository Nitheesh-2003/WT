function handleSubmit(e){
    e.preventDefault();
    const city=document.getElementById("city").value;
    console.log(city);
}

const form=document.querySelector("form");
form.addEventListener("submit",handleSubmit);