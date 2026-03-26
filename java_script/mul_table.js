function mul() {
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
}