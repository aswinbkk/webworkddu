let prime_btn = document.getElementById("prime_btn");

prime_btn.addEventListener('click', () => {
    let num = Number(document.getElementById('num').value);
    if (num == 1) {
        result.textContent = "1 is not prime nor composite";
    }
    let flag = 0;
    for (let i = 2; i < (num/2) + 1; i++) {
        if (num % i === 0) {
            result.textContent = "Given number is not prime";
            flag = 1;
            break;
        }
    }
    if (flag != 1) {
        result.textContent = "Given number is prime";
    }
})
