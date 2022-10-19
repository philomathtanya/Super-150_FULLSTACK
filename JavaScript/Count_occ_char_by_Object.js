let str = "Hello I am Ritesh verma ";
let count = 0;
let check = "abcdefghijklmnopqrstuvwxyz";
let a = {};
for (let i = 0; i < check.length; i++) 
{
    count = 0;
    for (let j = 0; j < str.length; j++)
    {
        if (check.charAt(i) == str.charAt(j)) {
            count++;
        }
        
    }   
    if (count > 0) {
        a[check.charAt(i)] = count;
        
    }

}
console.log(a);
