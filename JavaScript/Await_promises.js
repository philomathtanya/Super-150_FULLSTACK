const fs = require("fs")
async function abc () {
    await fs.promises.writeFile("../Super-150 Full Stack/HTML Pages/F    loat.html", "hello");
    let data = await fs.promises.readFile("../Super-150 Full Stack/HTML Pages/Grid.html", "utf-8");
    console.log(data);
    return "how are you";
}

async function main() {
    let data = await abc();
    console.log(data);
}
main();