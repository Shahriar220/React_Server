import React, {useState} from 'react';

const Search=(props)=>{
	const [searchValue,setSearchValue]=useState("");

	const handleSeacrchInputChanges=(e)=>{
		setSearchValue(e.target.value);
	}
	const resetInputField=()=>{
		setSearchValue("");
	}
	const CallSearchFunction=(e)=>{
		e.preventDefault();
		props.search(searchValue);
		resetInputField();
	}
	return(
		<form className="search">
		<input
		value={searchValue}
		onChange={handleSeacrchInputChanges}
		type="text"
		/>
		<input onClick={CallSearchFunction} type="submit" value="SEARCH"/>
		</form>
		);
}
export default Search;