let a = { "Ritesh": 2, "GLA": 3 ,"cars":["Swift","Beleno","Punch"]};
console.log(a);
console.log(a["GLA"]);//used to print the value of the key "GLA"
console.log(Object.keys(a));//used to print all keys of a
console.log(Object.values(a));//used to print aall values of a
console.log(a["cars"]);//print full array of cars
console.log(a.cars[2]);//print 2nd element from cars value
a["hello"] = 8;//add new key value pair in the dict as key "hello" and value 8
console.log(a);
