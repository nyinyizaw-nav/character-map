const express = require('express');
const path = require('path');

let port = process.env.PORT;

if ( port == "" || port == undefined ) { 
	port = 8000;
}

const app = express();


app.get('/', (req, res) => {
	res.send("This is home page");
});

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/home', (req, res) => {
	res.send("This is home page");
});

app.get('/compare', (req, res) => {
	res.send("This is compare page");
});

app.get('/character', (req, res, next) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.get('/about', (req, res) => {
	res.send("This is about page");
});

app.get('*', (req, res) => {
	res.send("Page not found");
});


app.listen(port, () => {
	console.log(`Express is running on ${port}`);
})
