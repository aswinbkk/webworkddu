let percent_btn = document.getElementById('percent_btn')

percent_btn.addEventListener('click', () => {
    let first_num = Number(document.getElementById("first_num").value)
    let sec_num = Number(document.getElementById("sec_num").value)
    result.textContent = ((first_num / sec_num) * 100)
})