const express = require("express");
const path = require("path");
const app = express();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'Public')))


app.set('Partials', path.join(__dirname, 'views', 'Partials'));

const todos = [
    "Coding",
    "Drawing",
    "Dancing"];
app.get('/todos', (req, res) => {
    res.render('Todos_Array', { todos });
});

app.set('views', path.join(__dirname, 'views')); //Can run from any path no need to run from template folder
app.get('/home', (req, res) => {
    res.render('index');
});
app.listen(3500, () => {
    console.log("Server running");
});
