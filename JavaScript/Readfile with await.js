const fs = require("fs");
const { resolve } = require("path");
let rfp = fs.promises.readFile("Files/file1.txt", "utf-8");
console.log(rfp)
resolve(rfp)
rfp.then((data) => {
    console.log(data)
})
let data = await fs.promises.readFile("Files/file1.txt")
console.log(rfp);
return data;