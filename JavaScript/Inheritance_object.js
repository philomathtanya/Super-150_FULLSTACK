let person = { firstName: "Ritesh", lastName: "Verma" };
// let p1 = Object.create(person);//use to inherit the property of object 1 person into p1 also
// console.log(p1["firstName"]);//hence the values of person is inhrit in p1
let p1 = {
    City: "Mathura",
    __proto__:person
}
console.log(p1["lastName"]);
p1["firstName"] = "hellobello";
console.log(p1.firstName);//hence the first priority is for p1
let p2 = {
    age: 19,
    __proto__:p1

}
console.log(p2.lastName);//hence here is the multiple inheritance is done | person-->p1-->p2
//two object can not inhert into a single object.
console.log(p2);//print only p2 object
console.log(Object.prototype.__proto__);//return NULL value
let arr = [1, 2, 3, 4, 5, 6];
Array.prototype.pop = function () {
    console.log("hello Guyszzz");

}
console.log(arr.pop());

