import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Back from '../../assets/back.svg';
import './CreateContact.css';
import ImageInput from '../ImageInput';
import serializeform from 'form-serialize';

class CreateContact extends Component {
	handleSubmit = (e) => {
		const { onCreateContact } = this.props;
		e.preventDefault();
		const values = serializeform(e.target, { hash: true });
		console.log('values', values);
		onCreateContact && onCreateContact(values);
	};
	render() {
		return (
			<div>
				<Link className='close-create-contact' to='/'>
					<img alt='back' className='back-icon' src={Back} />
				</Link>
				<form
					onSubmit={this.handleSubmit}
					className='create-contact-form'
				>
					<ImageInput
						className='create-contact-avatar-input'
						name='avatarURL'
						maxHeight={64}
					/>
					<div className='create-contact-details'>
						<input type='text' name='name' placeholder='Name' />
						<input type='text' name='email' placeholder='Email' />
						<button>Add Contact</button>
					</div>
				</form>
			</div>
		);
	}
}

export default CreateContact;
