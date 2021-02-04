import React from 'react';
import ReactDOM from 'react-dom';
import PrintMmChar from './character_table/character_table.js';
import NavBar from './nav_bar/nav_bar.js';

ReactDOM.render(
	<>
	<NavBar />
  	<PrintMmChar />
	</>
	,
  	document.getElementById('root')
);
