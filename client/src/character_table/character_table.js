import './character_table.css'
import uuid from 'react-uuid'

let mmChar = () => {
	let arr = [];
	for ( var i = 0x1000; i <= 0x109F; i++) {
		arr.push(String.fromCharCode(i));
	}

	return arr;
}


function PrintMmChar() {
	return (
	<>
		<h2>Pyidaungsu Font</h2>
	<div className="chartable pyidaungsu">
		{mmChar().map((c, index) => (
			<div className= "char" key={uuid()}>
			<div>{(index + 0x1000).toString(16)}</div>
			<div>{c}</div>
			</div>
		))}
	</div>	
		<h2>ZawGyi Font</h2>
	<div className="chartable zawgyi">
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
