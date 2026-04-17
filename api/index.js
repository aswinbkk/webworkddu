


let lists= document.getElementById('lists')


const getdata = async()=>{
const api= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
const data = await api.json()
const {categories} = data

categories.map(e=>{
    let li = document.createElement('li')
    li.innerHTML+=e.strCategory
    lists.appendChild(li)
})


}
getdata()