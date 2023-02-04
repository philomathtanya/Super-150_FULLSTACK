const express = require("express");
const app = express();
const path = require("path");
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/get', (req, res) => {
    res.render('index');
    
})
app.get('/user', (req, res) => {
    res.send("Request Recieved");
    res.end();
})
app.get('/', (req, res) => {
    res.render('index');
})
app.listen(5000, ()=>{
    console.log("Running at 5000");
})



	// Get:
	// 	-> Get request is to retive/fetch information.
	// 	-> Data is send as Query String Parameter.
	// 	-> Data is in the form of plain text.
	// 	-> Less Secure because the data is send in the format of URL

	// Post: 
	// 	-> Post request is used to create resource.
	// 	-> Data is send as request body format(Usually in Postman there are few formats like None , Form format , raw files , Binary).
	// 	-> Data can also send in variour format like JSON format , form data , HTML , JS or file.
	// 	-> More Secure because the data is send in the format of files.
	
	// Put:
	// 	-> Update All fields together.

	// Patch:  
	// 	-> Make changes one by one.
