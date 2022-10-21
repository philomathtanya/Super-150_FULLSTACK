function print(val) {
    console.log(val);
}
function add(a, b, print) { //callback function...
    let sum = a + b;
    print(sum);
}
add(2, 3, print);