const fs = require("fs")
let reaffileprimise = fs.promises.readFile("Files/File1.txt", "utf-8");
reaffileprimise.then((data) => {
    console.log(data);
}).catch((err) => {
    console.log("Could not read file due to :" + err);
})