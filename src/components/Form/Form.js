import React, { useState, useRef } from 'react';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormTitle,
	FormLabel,
	FormInputRow,
	FormTextArea,
	FormButton,
	FormMessage,
} from './FormStyles';
import { Container } from '../../globalStyles';
import validateForm from './validateForm';
import emailjs from 'emailjs-com'

const Form = ({closeModal}) => {
	const form = useRef();
	const sendEmail = (e) =>{
		e.preventDefault();

		emailjs.sendForm('service_wgfeh3k', 'template_1jy8fcw', form.current, 'user_bYXRceDsbpHZNyM397ser')
		  .then((result) => {
			setSuccess('Message was sent!');
			  console.log(result.text);
			  closeModal()
		  }, (error) => {
			  console.log(error.text);
		  });
	}
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateForm({ name, email, subject, message });

		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setName('');
		setEmail('');
		setSubject('');
		setMessage('');
		setError(null);
		setSuccess('Message was sent!');
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn>
					{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}
						<FormTitle>Drop A Message!</FormTitle>
						<FormWrapper ref={form} onSubmit={sendEmail}>
							<FormInputRow>
								<FormLabel>Name *</FormLabel>
								<FormInput type="text" name="name" required />
							</FormInputRow>
							<FormInputRow>
								<FormLabel>Email *</FormLabel>
								<FormInput type="email" name="email"required />
							</FormInputRow>
							<FormInputRow>
								<FormLabel>Subject *</FormLabel>
								<FormInput type="text" name="subject"required />
							</FormInputRow>
							<FormInputRow>
							<FormLabel>Message *</FormLabel>
									<FormTextArea name="message"required />
							</FormInputRow>
								<FormButton type="submit" value="Send" />
						</FormWrapper>
						
					</FormColumn>
				</FormRow>
			</Container>
		</FormSection>
	);
};

export default Form;
