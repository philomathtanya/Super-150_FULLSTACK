let num = 1e9;// here e represent the number of zeroes and 9 is the count of that zeroes....
console.log(num);
let num2 = 1e-9;// here e represent the number of zeroes and 9 is the count of that zeroes....
console.log(num2);
let no = 255;
console.log(no.toString());//convert into Number to String
console.log(no.toString(2));//convert into Number to String of base 2
console.log(no.toString(8));//convert into Number to String of base 8
let dec = 12.52;
console.log(Math.floor(dec));//gives floor velue less possible
console.log(Math.ceil(dec));//give ceil value next possible
console.log(Math.round(dec));//roundoff
let dec2 = 12.466582;
console.log(dec2.toFixed(3));//round off upto 3 decimal faces
console.log(parseInt("12000 px"));//only print 12000 because it takes only numbers and leave any other character
console.log(parseFloat("12.123 px"));//only print upto 12.123 decimal faces  and ignore any other character
let str = "Ritesh";
console.log(str.length);//return lenth of String
console.log(str[2]);//print charater at 2 index
console.log(str.charAt(2));//print charater at 2 index
console.log(str.indexOf("t"));//return the index of t in str
let str1 = "this is the name is the ritesh";
console.log(str1);
let pos=0;
for (let i = 0; i < str1.length; i++){
    pos = str1.indexOf("is", pos + 1);   
    if (pos == -1) {
        break;
    }
    console.log(pos);
    
}
console.log(str1.slice(0, 5));//print substring for 0 to 5 index where 5 is not including
console.log(str1.substring(8, 0));//print substring form both direction...and print same for  (0,8)
console.log(str.toUpperCase());//convert string into upper case
console.log(str.toLowerCase());//convert string into lower case
console.log(str1.lastIndexOf('a'));//return last index of aany character