import React, { Component } from 'react';
import './App.css';
import ListsContacts from './components/Contacts/ListsContacts';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [
				{
					id: 'ryan',
					name: 'Ryan Florence',
					email: 'ryan@reacttraining.com',
					avatarURL: 'http://localhost:5001/ryan.jpg',
				},
				{
					id: 'michael',
					name: 'Michael Jackson',
					email: 'michael@reacttraining.com',
					avatarURL: 'http://localhost:5001/michael.jpg',
				},
				{
					id: 'tyler',
					name: 'Tyler McGinnis',
					email: 'tyler@reacttraining.com',
					avatarURL: 'http://localhost:5001/tyler.jpg',
				},
			],
		};
	}
	removeContact = (contact) => {
		this.setState((state) => ({
			contacts: state.contacts.filter((c) => c.id !== contact.id),
		}));
	};
	render() {
		const { contacts } = this.state;
		return (
			<div className='App'>
				<ListsContacts
					onDeleteContact={this.removeContact}
					contacts={contacts}
				/>
			</div>
		);
	}
}

export default App;
