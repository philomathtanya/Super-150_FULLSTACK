const { listenerCount } = require("process");

console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.links);
console.log(document.body);
console.log(document.head);
console.log(document.all);
let header = document.getElementById('header-title');
header.style.backgroundColor = 'red';
header.innerHTML = "<h3>H33</h3>";
console.log(hearder);
for (let i = 0; i < list.length; i++){
    Object.assign(list[i].style,{backgroundColor:'red',fontWeight:'bold'})
}   