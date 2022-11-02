const fs = require('fs');//fs used to take or read file always const
let count = 0;
function callback(err, data) {
    // console.log(data);
    count += 1;//count the total number of files readed
    if (count <= 5) {
        if (!err) {
            console.log(data)
        }
        else
            console.log(err)
    }
    fs.readFile("Files/File" + (count + 1 )+ ".txt", "utf-8", callback);//fs.readFile(_FileNAme_,_Format_,_Callback_)
}
fs.readFile('Files/File1.txt', 'utf-8', callback);//Async function fs.readFile( filename, encoding, callback_function 
