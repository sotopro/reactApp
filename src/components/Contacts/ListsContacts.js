import React from 'react';
import PropTypes from 'prop-types';
import './ListsContacts.css';
import RemoveIcon from '../../assets/criss-cross.svg';

const ListsContacts = (props) => {
	const { contacts, onDeleteContact } = props;
	const removeContact = (contact) => {
		onDeleteContact && onDeleteContact(contact);
	};
	return (
		<ol className='contact-list'>
			{contacts.map((contact) => (
				<li key={contact.id} className='contact-list-item'>
					<div
						className='contact-avatar'
						style={{
							backgroundImage: `url(${contact.avatarURL})`,
						}}
					/>
					<div className='contact-details'>
						<p>{contact.name}</p>
						<p>{contact.email}</p>
					</div>
					<img
						alt='remove'
						onClick={() => removeContact(contact)}
						className='contact-remove'
						src={RemoveIcon}
					/>
				</li>
			))}
		</ol>
	);
};

ListsContacts.prototype = {
	contacts: PropTypes.array.isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};

export default ListsContacts;
