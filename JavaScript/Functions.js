function abc()//without arguments
{
    console.log("hello");
}
abc();

function arguments(a,b) {//with arguments
    console.log(a + b);
}
arguments(3, 6);

let str = "Ritesh verma";
function xyz() {//without local variable
    console.log("My name is Ritesh ", str);
}

xyz();
function xyz1() {//without local variable
    str = "Tanya";
    console.log("My name is ", str);
}
xyz1();

function retexample(a,b) {// function with return statement
    return a + b;// If value is not return to a function then it gives undefined....
}
console.log(retexample(5, 6));

let vari = function () {
    console.log("Hello world");
}
vari();