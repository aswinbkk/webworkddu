let hamburger_id = document.getElementById("hamburger_id"); 
let menu_id = document.getElementById("menu_id"); 
 
hamburger_id.addEventListener("click", function () { 
 
    hamburger_id.classList.toggle('active') 
    menu_id.classList.toggle('active'); 
 
});