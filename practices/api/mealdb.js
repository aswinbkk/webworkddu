const cardContainer = document.getElementById('card_container');
const htmlBody = document.getElementById('html_body');

const getdata = async()=>{
const api= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
const data = await api.json()

const {categories} = data
console.log(data);

cardContainer.style.display = "grid";
cardContainer.style.gridTemplateColumns="repeat(4, 1fr)"
cardContainer.style.gap = "20px";

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

    //style
    card.style.background="#fff";
    card.style.borderRadius="8px";
    card.style.textAlign="center";
    card.style.width="300px";

    img.style.width= "100%";
    img.style.height="200px";

    info.style.padding="0 10px 10px";
    info.style.textAlign="justify";
    info.style.color="#555";

    htmlBody.style.fontFamily="Arial, sans-serif";
    htmlBody.style.background="#f4f4f4";
    htmlBody.style.padding="20px";

    cardContainer.appendChild(card);

})
}

getdata();