const fullNameInput = document.getElementById('full_name');
const mobNumInput = document.getElementById('mob_num');
const emailIdInput = document.getElementById('email');
const linkedinIdInput = document.getElementById('linkedin');
const townAddressInput = document.getElementById('address');
const objectiveInfoInput = document.getElementById('objective');

const generateBtn = document.getElementById('generate_btn');
const cardContainer = document.getElementById('card_container');

generateBtn.addEventListener('click', () => {
    const fullName = fullNameInput.value.trim();
    const mobNum = mobNumInput.value.trim();
    const emailId = emailIdInput.value.trim();
    const linkedinId = linkedinIdInput.value.trim();
    const townAddress = townAddressInput.value.trim();
    const objectiveInfo = objectiveInfoInput.value.trim();

    if (!fullName || !mobNum || !townAddress || !emailId || !linkedinId || !objectiveInfo) {
        alert("Please fill in all required fields.");
        return;
    }

    cardContainer.innerHTML=""

    const intro = document.createElement('div');
    intro.classList.add('intro');
    const name = document.createElement('h2');
    name.textContent = fullName;

    const mob_mail = document.createElement('div');
    mob_mail.classList.add('mob_mail');
    const mobile = document.createElement('h4');
    mobile.textContent = mobNum + " | ";
    const email = document.createElement('h4');
    email.textContent = emailId;

    const linkedin_address = document.createElement('div');
    linkedin_address.classList.add('linkedin_address');
    const linkedin = document.createElement('h4');
    linkedin.textContent = linkedinId + " | ";
    const address = document.createElement('h4');
    address.textContent = townAddress;

    const objective_div = document.createElement('div');
    objective_div.classList.add('objective_div');
    const objective_heading = document.createElement('h4');
    objective_heading.textContent = 'OBJECTIVE';
    objective_heading.style.textAlign = 'left';
    objective_heading.style.color = 'RED';
    const underline = document.createElement('hr');
    const objective = document.createElement('p');
    objective.textContent = objectiveInfo;

    

    intro.appendChild(name);

    mob_mail.appendChild(mobile);
    mob_mail.appendChild(email);
    intro.appendChild(mob_mail);

    linkedin_address.appendChild(linkedin);
    linkedin_address.appendChild(address);
    intro.appendChild(linkedin_address);

    objective_div.appendChild(objective_heading);
    objective_div.appendChild(underline);
    objective_div.appendChild(objective);
    intro.appendChild(objective_div);

    cardContainer.appendChild(intro);
});
