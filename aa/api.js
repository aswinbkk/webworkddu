const cardContainer = document.getElementById('card_container_id');

const getCard = async()=>{

const cardDataApi = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
const cardData = await cardDataApi.json();
const {categories} = cardData;

categories.map(e=>{

    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = e.strCategoryThumb;

    const title = document.createElement('h4');
    title.textContent = e.strCategory;

    const info = document.createElement('p');
    info.textContent = e.strCategoryDescription;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(info);

    cardContainer.appendChild(card);
})
}

getCard();