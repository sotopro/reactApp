import React from 'react';
import { Link } from 'react-router-dom';
import './SearchBox.css';
import SearchIcon from '../assets/search.svg';

const SearchBox = (props) => {
	const {
		placeholder,
		value,
		route,
		onChangeText,
		rightIcon,
		onClickRight,
	} = props;
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
				<Link to={route} onClick={() => handleIconEvent()}>
					<img alt='icon' className='right-icon' src={rightIcon} />
				</Link>
			) : null}
		</div>
	);
};

export default SearchBox;
