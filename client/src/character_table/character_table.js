import './character_table.css'
import uuid from 'react-uuid'
import React from 'react';

let mmChar = () => {
	let arr = [];
	for ( var i = 0x1000; i <= 0x109F; i++) {
		arr.push(String.fromCharCode(i));
	}

	return arr;
}

function PrintMmChar(props) {

	return (
	<>
	<div className={`chartable ${props.font}`} >
		{mmChar().map((c, index) => (
			<div className= "char" key={uuid()}>
			<div>{(index + 0x1000).toString(16)}</div>
			<div>{c}</div>
			</div>
		))}
	</div>	
	</>
	);
}

export default PrintMmChar
