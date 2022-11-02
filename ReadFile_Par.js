const fs = require('fs');
function callback(err, data) {
    if (!err) {
        console.log(data)
    }
    else
        console.log(err)
}
for (let index = 1; index <=5 ; index++) {
 
    fs.readFile("Files/File" +index+ ".txt", "utf-8", callback);//fs.readFile(_FileNAme_,_Format_,_Callback_)
}
