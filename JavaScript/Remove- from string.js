let str = "background-color-red";

let arr = str.split("-");
console.log(arr);
for (let index = 0; index < arr.length; index++) {
    String(arr[index]).toUpperCase();
    
}
str=arr.join("");
console.log(str);