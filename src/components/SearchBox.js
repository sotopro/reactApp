import React from 'react';
import './SearchBox.css';
import SearchIcon from '../assets/search.svg';

const SearchBox = (props) => {
	const { placeholder, value, onChangeText, rightIcon, onClickRight } = props;
	const handleIconEvent = () => {
		onClickRight && onClickRight();
	};
	return (
		<div className='list-seach-top'>
			<img alt='search' className='search-icon' src={SearchIcon} />
			<input
				className='search-box'
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={(event) => onChangeText(event.target.value)}
			/>
			{rightIcon ? (
				<img
					alt='icon'
					onClick={() => handleIconEvent()}
					className='right-icon'
					src={rightIcon}
				/>
			) : null}
		</div>
	);
};

export default SearchBox;
