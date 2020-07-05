import React, { Component } from 'react';

const people = [
	{ id: 1, name: 'Michael' },
	{ id: 2, name: 'Peter' },
	{ id: 3, name: 'Rachael' },
];
export default class ContactList extends Component {
	render() {
		return (
			<ol>
				{people.map((person) => (
					<li key={person.id}>{person.name}</li>
				))}
			</ol>
		);
	}
}
