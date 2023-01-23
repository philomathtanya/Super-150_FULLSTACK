//Read Only one file
// const fs = require("fs");
// fs.readFile("q1.html",
//     {
//         encoding: 'utf8',
//         flag:'r'//Read
//     }, (err, data) => {
//         if (!err) {
//             console.log(data);
//         } else
//         {
//             console.log(err)
//             }
//     })






//Read Multiple Files
// let count = 0;

// const path = require("path");
// // __dirname current directory me path create krta h file ki
// // __filename is file ko as current directory use krta hai
// fs.readFile(path.join(__dirname, 'q' + (count + 1) + '.html'), 'utf-8', cb);
// function cb(err, data) {
//     count=count+1;
//     if (count <= 2) {
//         if (!err) {
//             console.log(data);
//         } else {
//             console.log(err);
//         }
//         fs.readFile(path.join(__dirname, 'q' + (count + 1) + '.html'), 'utf-8', cb);
//     }
// }




//Read files parallely
// function cb(err, data) {
//     if (!err) {
//         console.log(data);
//     }
//     else {
//         console.log(err);
//     }
// }
// for (let i = 1; i <= 2; i++){
//     fs.readFile(path.join(__dirname, 'q' + i + '.html'), 'utf-8', cb);
// }
