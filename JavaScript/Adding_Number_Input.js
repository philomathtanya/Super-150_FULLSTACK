function tsum() {
    var x, y;
x = Number(document.getElementById('num1').value);
y = Number(document.getElementById('num2').value);

// function sum(n1, n2) {
//     let sum = n1 + n2;
//     return sum;
// }
    document.getElementById("print").innerText = `Sum=${x + y}`;
    // alert(`Sum of two numbers= ${x+y}`);
}