function change_content() {
    const title=document.getElementById('title')
    const decription=document.getElementById('decription')

    title.textContent="Title content changed";
    decription.textContent="You have manipulated DOM";

    title.style.color = "blue";
}

const action_button=document.getElementById('action_button')
action_button.addEventListener('click', change_content);