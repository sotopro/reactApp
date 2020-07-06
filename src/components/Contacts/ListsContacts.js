import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ListsContacts.css';
import RemoveIcon from '../../assets/criss-cross.svg';
import AddUserIcon from '../../assets/add.svg';
import SearchContacts from '../SearchBox';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
class ListsContacts extends Component {
	static propTypes = {
		contacts: PropTypes.array.isRequired,
		onDeleteContact: PropTypes.func.isRequired,
	};
	constructor(props) {
		super(props);
		this.state = {
			query: '',
		};
	}

	removeContact = (contact) => {
		const { onDeleteContact } = this.props;
		onDeleteContact && onDeleteContact(contact);
	};
	searchContacts = (value) => {
		this.setState({ query: value.trim() });
	};
	addUser = () => {
		console.log('addUser Func');
	};
	clearQuery = () => {
		this.setState({ query: '' });
	};
	render() {
		const { contacts } = this.props;
		const { query } = this.state;
		let showingContacts;
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i');
			showingContacts = contacts.filter((contact) =>
				match.test(contact.name)
			);
		} else {
			showingContacts = contacts;
		}

		showingContacts.sort(sortBy('name'));

		return (
			<div className='list-contacts'>
				<SearchContacts
					placeholder='Search contacts'
					value={query}
					onChangeText={this.searchContacts}
					rightIcon={AddUserIcon}
					onClickRight={this.addUser}
					route={'/create'}
				/>
				{showingContacts.length !== contacts.length ? (
					<div className='showing-contacts'>
						<span>
							Now showing {showingContacts.length} of{' '}
							{contacts.length} total
						</span>
						<button
							onClick={this.clearQuery}
							className='button-clear'
						>
							Show all
						</button>
					</div>
				) : null}
				<ol className='contact-list'>
					{showingContacts.map((contact) => (
						<li key={contact.name} className='contact-list-item'>
							<div className='contact-avatar'>
								<img
									alt='avatar'
									className='avatar'
									src={contact.avatarURL}
								/>
							</div>
							<div className='contact-details'>
								<p>
									<b>{contact.name}</b>
								</p>
								<p>{contact.email}</p>
							</div>
							<img
								alt='remove'
								onClick={() => this.removeContact(contact)}
								className='contact-remove'
								src={RemoveIcon}
							/>
						</li>
					))}
				</ol>
			</div>
		);
	}
}
export default ListsContacts;
