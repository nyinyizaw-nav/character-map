import './character_table.css'

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
	<div className="chartable pyidaungsu">
		{mmChar().map((c) => <div className="char">{c}</div>)}
	</div>	
	<div className="chartable zawgyi">
		{mmChar().map((c) => <div className="char">{c}</div>)}
	</div>
	</>
	);
}

export default PrintMmChar
