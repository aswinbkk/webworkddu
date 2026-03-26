let result = document.getElementById('result')
let output = document.getElementById('output')

let fadd_btn = document.getElementById('fadd_btn')
let arr=[];
fadd_btn.addEventListener('click', ()=>{
    let array_ip = document.getElementById('array_ip').value
    arr.unshift(Number(array_ip));
    result.textContent=`[${arr}]\nLength of array ${arr.length}`;
})

let ladd_btn = document.getElementById('ladd_btn')
ladd_btn.addEventListener('click', ()=>{
    let array_ip = document.getElementById('array_ip').value
    arr.push(Number(array_ip));
    result.textContent=`[${arr}]`;
})

let lremove_btn = document.getElementById('lremove_btn')
lremove_btn.addEventListener('click', ()=>{
    let array_ip = document.getElementById('array_ip').value
    arr.pop(Number(array_ip));
    result.textContent=`[${arr}]`;
})

let fremove_btn = document.getElementById('fremove_btn')
fremove_btn.addEventListener('click', ()=>{
    let array_ip = document.getElementById('array_ip').value
    arr.shift(Number(array_ip));
    result.textContent=`[${arr}]`;
})

let num1=0;
let num2=0;
let num3=0;
let splice_btn = document.getElementById('splice_btn')
splice_btn.addEventListener('click', ()=>{
    let array_ip = document.getElementById('array_ip').value
console.log(String(array_ip));
    [num1, num2, num3] = array_ip.split(',').map(Number);
console.log(num1, num2, num3);
    arr.splice(num1, num2, num3);
    output.textContent=`[${arr}]`;
})

let foreach_btn = document.getElementById('foreach_btn')
foreach_btn.addEventListener('click', ()=>{
    let array_ip = document.getElementById('array_ip').value
    

    arr.forEach (Number(array_ip));

    output.textContent=`[${arr}]`;
})

