let a = true;
setInterval(function () {//intervally repeat the hello after every 1 second
    if (a) {
        
        console.log("Hello");
    }
}, 500);
setTimeout(function () {
    a = false

}, 10070);