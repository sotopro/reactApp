import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ListsContacts from './components/Contacts/ListsContacts';
import CreateContact from './components/Contacts/CreateContact';
import ContactsAPI from './utils/ContactsAPI';
import MealList from './components/Meal/MealList';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contacts: [],
		};
	}
	componentDidMount() {
		ContactsAPI.get().then((contacts) => {
			this.setState({
				contacts,
			});
		});
	}
	removeContact = (contact) => {
		this.setState((state) => ({
			contacts: state.contacts.filter((c) => c.id !== contact.id),
		}));
		ContactsAPI.remove(contact);
	};
	createContact = (contact) => {
		ContactsAPI.create(contact).then((contact) => {
			this.setState((state) => ({
				contacts: state.contacts.concat([contact]),
			}));
		});
	};
	render() {
		const { contacts } = this.state;
		return (
			<div className='App'>
				<Route
					path='/'
					exact
					render={() => {
						return (
							contacts.length !== 0 && (
								<ListsContacts
									onDeleteContact={this.removeContact}
									contacts={contacts}
								/>
							)
						);
					}}
				/>
				<Route
					path='/create'
					render={({ history }) => (
						<CreateContact
							onCreateContact={(contact) => {
								this.createContact(contact);
								history.push('/');
							}}
						/>
					)}
				/>
				<Route path='/meal' exact component={MealList} />
			</div>
		);
	}
}

export default App;
