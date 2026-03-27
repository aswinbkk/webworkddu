
const imgUrlInput = document.getElementById('img_url');
const userNameInput = document.getElementById('user_name');
const jobTitleInput = document.getElementById('job_title');
const jobInfoInput = document.getElementById('job_info');
const generateBtn = document.getElementById('generate_btn');
const cardContainer = document.getElementById('card_container');

generateBtn.addEventListener('click', () => {
    const imgUrl = imgUrlInput.value.trim();
    const userName = userNameInput.value.trim();
    const jobTitle = jobTitleInput.value.trim();
    const jobInfo = jobInfoInput.value.trim();

    if (!imgUrl || !userName || !jobTitle || !jobInfo) {
        alert("Please fill in all required fields (Image URL, Name, Occupation, Description).");
        return;
    }

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = imgUrl;

    const name = document.createElement('h3');
    name.textContent = userName;

    const title = document.createElement('h4');
    title.textContent = jobTitle;

    const info = document.createElement('p');
    info.textContent = jobInfo;

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(title);
    card.appendChild(info);

    cardContainer.appendChild(card);
});
