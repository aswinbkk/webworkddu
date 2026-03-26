let result = document.getElementById("result")
let mul_btn = document.getElementById('mul_btn')

mul_btn.addEventListener('click',()=>{
    let mulnum = Number(document.getElementById("mulnum").value)
    let upto = Number(document.getElementById("upto").value)
    let output = "";
    let mul = 1;
    let i = 1;
    result.innerHTML = "";
    while (i <= upto) {
        output = i + " x " + mulnum + " = " + (mul = i * mulnum);
        result.innerHTML = result.innerHTML + output + "<br>";
        i++;
    }
})

let large_btn= document.getElementById('large_btn')
large_btn.addEventListener('click',()=>{
    let first_num = Number(document.getElementById("first_num").value)
    let sec_num = Number(document.getElementById("sec_num").value)
    let third_num = Number(document.getElementById("third_num").value)
    if((first_num >= sec_num) && (first_num >= third_num))
    {
        result.textContent = first_num;

    }
    else if(sec_num >= third_num)
    {
        result.textContent = sec_num;
    }
    else
    {
        result.textContent = third_num;
    }
})