function tsum() {
    var x, y;
x = Number(document.getElementById('num1').value);
    y = Number(document.getElementById('num2').value);
    document.getElementById("sign").innerText = `+`;
    document.getElementById("print").innerText = `Result=${x + y}`;
}
function tsub() {
    var x, y;
x = Number(document.getElementById('num1').value);
    y = Number(document.getElementById('num2').value);
    document.getElementById("sign").innerText = `-`;

    document.getElementById("print").innerText = `Result : ${x - y}`;
}
function tmul() {
    var x, y;
x = Number(document.getElementById('num1').value);
    y = Number(document.getElementById('num2').value);
    document.getElementById("sign").innerText = `*`;

    document.getElementById("print").innerText = `Result : ${x * y}`;
}
function tdiv() {
    var x, y;
x = Number(document.getElementById('num1').value);
    y = Number(document.getElementById('num2').value);
    document.getElementById("sign").innerText = `/`;

    document.getElementById("print").innerText = `Result : ${x / y}`;
}