const { resolve } = require("path");

const p = new Promise((function (resolve, reject) {
    setTimeout(() => {
        let randnum = Math.floor(Math.random() * 10);
        console.log(randnum)
        if (randnum % 2 == 0) {
            ;
            resolve(randnum)
        }
        else
        {
            reject();
            }
   },2000) 
}))
p.then((data) => {//.then always accept the resolved value
    console.log(data)
    console.log("Resolved")
}).then((data)=>{
    console.log("hellooooooooooooo");
}).catch(() => {//.catch always accept rejected value
    // console.log(err)
    console.log("Rejected")
})