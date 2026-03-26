let form_id = document.getElementById('form_id');
form_id.addEventListener( 'submit' ,function(parameter){
    parameter.preventDefault();

    let first_name = document.getElementById('first_name').value.trim();
    let second_name = document.getElementById('second_name').value.trim();
    let email = document.getElementById('email').value.trim();
    let mobile = document.getElementById('mobile').value.trim();
    let first_pass = document.getElementById('first_pass').value.trim();
    let second_pass = document.getElementById('second_pass').value.trim();

 
    if (first_name === "") {
        error_text1.textContent = "First name is required";
        return;
    }
    else{
        error_text1.textContent = "";
    }

    if (second_name === "") {
        error_text2.textContent = "Second name is required";
        return;
    }
      else{
        error_text2.textContent = "";
    }

    if (email === "") {
        error_text3.textContent = "Email ID is required";
        return;
    }
      else{
        error_text3.textContent = "";
    }

    if (mobile === "") {
        error_text4.textContent = "Mobile number is required";
        return;
    }
      else{
        error_text4.textContent = "";
    }

    if (first_pass === "") {
        error_text5.textContent = "Password is required";
        return;
    }
      else{
        error_text5.textContent = "";
    }

    if (second_pass === "") {
        error_text6.textContent = "Password confirmation is required";
        return;
    }
      else{
        error_text6.textContent = "";
    }

    alert("Form submitted successfully");

});
