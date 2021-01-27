const express = require('express');

let port = process.env.PORT;

if ( port == "" || port == undefined ) { 
	port = 8000;
}

const app = express();

app.get('/', (req, res) => {
	res.send("<h2>Hello From the Express</h2>");
});

app.listen(port, () => {
	console.log(`Express is running on ${port}`);
})
