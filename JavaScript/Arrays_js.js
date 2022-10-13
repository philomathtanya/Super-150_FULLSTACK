let arr = new Array(5);//array declearation using constructor
console.log(arr);//print "[ <5 empty items> ]" beacuse array is empty
let arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1[2]);//print value at 2 in array1
let arr2 = [1, 2, 3, 4, 5, "ritesh", "Tanya"];//any type of data can involve
console.log(arr2); // we can directy print array by simple name
let arr3 = [1, 2, 4, 5, 3, 6, function () { console.log("Welcome to GLA"); }];
console.log(arr3[6]());//function run here
arr3.pop();//pop last element from array
console.log(arr3);
arr3.push(12);//push element at the last of array
console.log(arr3);
arr3.shift();//using to remove first element of the array
console.log(arr3);
arr3.unshift(12);//used to add value at the starting of the array
console.log(arr3);
console.log(arr2.length);//used to find the length of the array
let arr4 = arr2;//value of arr2 is copy with address into arr4[]
console.log(arr4 == arr2);//print true bacause two array is at same memory location
console.log([2] == [2]);//print false because two arrays is at different memory location
let arr2d = [ //two d array
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arr2d[1][1]);
arr2.reverse();//used to reverse array and assign reverse array in arr2
console.log(arr2);
console.log(arr2);
console.log(arr2.splice(0, 3));//delete elements from 0 to 3 and return that deleted elements
console.log(arr2.splice(0, 1,100));//delete elements from 0 to 1 and add 100 at starting and return deleted + added elemnts

console.log(arr2);
for (let i of arr2) {//for each loop/
    console.log(i);    
}
let arr5 = "my name is ritesh verma";
let splited = arr5.split(" ");
for (let i = 0; i < splited.length;i++){
    let str = splited[i].split("");
    str.reverse();
    splited[i] = str.join("");
}
console.log(splited);
