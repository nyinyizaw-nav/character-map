const express = require('express');
const path = require('path');

let port = process.env.PORT;

if ( port == "" || port == undefined ) { 
	port = 8000;
}

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(port, () => {
	console.log(`Express is running on ${port}`);
})
