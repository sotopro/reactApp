const api =
	process.env.REACT_APP_CONTACTS_API_URL || 'http://172.18.66.17:5001';

let token = localStorage.token;

if (!token) token = localStorage.token = Math.random().toString(36).substr(-8);

const headers = {
	Accept: 'application/json',
	Authorization: token,
};

const ContactsAPI = {
	get: async () => {
		const response = await fetch(`${api}/contacts`, { headers });
		let data = await response.json();
		return data.contacts;
	},
	remove: async (contact) => {
		const response = await fetch(`${api}/contacts/${contact.id}`, {
			method: 'DELETE',
			headers,
		});
		let data = await response.json();
		return data.contact;
	},
	create: async (body) => {
		const response = await fetch(`${api}/contacts`, {
			method: 'POST',
			headers: {
				...headers,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
		let data = await response.json();
		return data;
	},
};

export default ContactsAPI;
