import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function SearchBar () {
	const options = [
		"pyidaungsu",
		"zawgyi"
	];
	const [selectedOption, setSelectedOption] =
	React.useState({value: "pyidaungsu", label: "pyidaungsu"});
        const defaultOption = options[0];



	React.useEffect(
		() => {

		const charTable = document.querySelector('.chartable');

		charTable.className = `chartable ${selectedOption.value}`;

		return(
			() => {
				
			}
		);
		},
		[selectedOption],
	);

	return (
	<>
	<Dropdown 
                options={options} 
                value={defaultOption}
                onChange={setSelectedOption}
                placeholder="Select an option" />
	</>
	)

}

export default SearchBar
