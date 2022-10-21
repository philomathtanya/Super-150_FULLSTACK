const fs = require('fs');
function callback(err, data) {
    if (!err) {
        console.log(data)
    }
    else
        console.log(err)
}
fs.readFile('Files/File1.txt', 'utf-8', callback);