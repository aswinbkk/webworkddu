let form_id = document.getElementById("form_id"); 
 
form_id.addEventListener("submit", function (parameter) { 
    parameter.preventDefault(); 
 
    let name = document.getElementById("name").value.trim(); 
    let email = document.getElementById("email").value.trim(); 
    let password = document.getElementById("password").value.trim(); 
    let country = document.getElementById('country').value;
    let terms = document.getElementById("terms").checked; 
 
    let error = document.getElementById("error"); 
    error.innerText = ""; 

    if (name === "") { 
        error.innerText = "Name is required"; 
        return; 
    } 
 
    if (email === "") { 
        error.innerText = "Email is required"; 
        return; 
    } 
 
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if (!email.match(emailPattern)) { 
        error.innerText = "Enter valid email"; 
        return; 
    } 

    if (password.length < 6) { 
        error.innerText = "Password must be at least 6 characters"; 
        return; 
    } 

    let gender = document.querySelector('input[name="gender"]:checked'); 
    if (!gender) { 
        error.innerText = "Please select gender"; 
        return; 
    } 

    if (country === "") { 
        error.innerText = "Please select a country"; 
        return; 
    } 

    if (!terms) { 
    error.innerText = "You must accept Terms & Conditions"; 
    return; 
    } 

    alert("Form submitted successfully");
});