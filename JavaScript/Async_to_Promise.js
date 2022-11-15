const fs = require("fs")
function abc() {                                             
        return new Promise(function (res, rej) {
            fs.promises.readFile("../Super-150 Full Stack/HTML Pages/Grid.html", "utf-8").then(function (data) {
                console.log(data);
                res("resolve");
            })
        })
    }
    
    abc().then(function (data) {
        console.log(data);
    }).catch(function (err) {
        console.log(err);
    })
    