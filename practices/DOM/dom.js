// Get DOM elements
const imgUrlInput = document.getElementById('imgUrl');
const nameInput = document.getElementById('name');
const occupationInput = document.getElementById('occupation');
const infoInput = document.getElementById('info');
const generateBtn = document.getElementById('generateBtn');
const cardContainer = document.getElementById('cardContainer');

// Event listener for button click
generateBtn.addEventListener('click', () => {
    const imgUrl = imgUrlInput.value.trim();
    const name = nameInput.value.trim();
    const occupation = occupationInput.value.trim();
    const info = infoInput.value.trim();

    // Input validation
    if (!imgUrl || !name || !occupation) {
        alert("Please fill in all required fields (Image URL, Name, Occupation).");
        return;
    }

    // Clear previous card
    cardContainer.innerHTML = '';

    // Create card elements
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = imgUrl;
    img.alt = name;
    img.onerror = () => {
        img.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
    };

    const title = document.createElement('h2');
    title.textContent = name;

    const job = document.createElement('h4');
    job.textContent = occupation;

    const description = document.createElement('p');
    description.textContent = info || "No description provided.";

    // Append elements to card
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(job);
    card.appendChild(description);

    // Append card to container
    cardContainer.appendChild(card);
});
