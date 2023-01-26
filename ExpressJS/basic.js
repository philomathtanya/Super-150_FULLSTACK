const express = require('express');
let app = express();
const port = 3000;

// app.get('/', (req, res) => {
//     res.write("this is the /page");
//     res.end();
// });

//res.write('heyy') we need to end the request by res.end() but using res.send('heyy') there is no need to end with res.end())
app.get('/:name/:age', (req, res) => {
    res.status(350);
    res.write(`Jai Shri Ram! is the /page,being accessed by ${req.params.name} of age ${req.params.age}`);
    res.end();
});
app.get('/', (req, res) => {
    res.status(350);
    res.send(`heyy world`);
    res.end();
});
app.get('/:hello/:age/:loc', (req, res) => {
    res.status(320);
    const { hello } = req.params;
    res.send(`This is another example of params= ${hello} and ${age} and ${loc}`);
})
// app.get('*',(req,res)=> {
//     res.send(`This is default page.`)
// });
app.get('/search', (req, res) => {
    // console.log(req.query);
    //Response at: "http://localhost:3000/search?text=abcd"
    res.send(req.query);
    res.send("Jai Shree Ram");
    // res.end();
});

app.listen(port, () => {
    console.log(`Running  at port ${port}`);
});
