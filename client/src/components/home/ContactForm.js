import React, { useEffect, useRef, useState } from "react";

// img
import email from "./../../assets/contact/email.svg";

const ContactForm = () => {
	useEffect(() => {
		const inputs = document.querySelectorAll("input, textarea");
		for (let i = 0; i < inputs.length; i++) {
			inputs[i].style.animationDelay = `${1800 + 200 * i}ms`;
		}
	});
	// Input states
	const [name, setName] = useState("");
	const [compagny, setCompagny] = useState("");
	const [mail, setMail] = useState("");
	const [message, setMessage] = useState("");
	const [messageSent, setMessageSent] = useState(false);

	// Error states
	const [nameError, setNameError] = useState(false);
	const [compagnyError, setCompagnyError] = useState(false);
	const [mailError, setMailError] = useState(false);
	const [messageError, setMessageError] = useState(false);

	const form = useRef();

	// Regex
	function inputValidation() {
		if (name.length < 24 && name.length >= 3 && /^([A-Za-z]{3,20})?([-]{0,1})?([A-Za-z]{3,20})$/.test(name)) {
			setNameError(false);
			if (compagny.length < 24) {
				setCompagnyError(false);
				if (mail.length < 52 && (mail.length > 6) & /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(mail)) {
					setMailError(false);
					if (message.length < 300 && message.length > 12) {
						setMessageError(false);
						return true;
					} else {
						setMessageError(true);
						return false;
					}
				} else {
					setMailError(true);
					return false;
				}
			} else {
				setCompagnyError(true);
				return false;
			}
		} else {
			setNameError(true);
			return false;
		}
	}

	// Handle submit
	const sendEmail = (e) => {
		e.preventDefault();
		if (inputValidation()) {
			console.log("Message sent, thank u :)");
			setName("");
			setCompagny("");
			setMail("");
			setMessage("");
			setMessageSent(true);
			setTimeout(() => {
				setMessageSent(false);
			}, 4000);
		} else {
			console.log("error");
		}
	};

	return (
		<div className="contact-section__content--right-part">
			<form ref={form} onSubmit={sendEmail}>
				<div className="form">
					<div>
						<label htmlFor="name">
							<input placeholder="Nom *" name="name" type="text" minLength="3" maxLength="24" pattern="[a-z A-Z]{3,24}" value={name} onChange={(e) => setName(e.target.value)} required />
							{nameError && <div className="error">Nom invalide.</div>}
						</label>
						<br />
						<label htmlFor="compagny">
							<input placeholder="Entreprise" name="compagny" type="text" maxLength="24" pattern="[a-z A-Z]{2,24}" value={compagny} onChange={(e) => setCompagny(e.target.value)} />
							{compagnyError && <div className="error">Le nom est invalide.</div>}
						</label>
						<br />
						<label htmlFor="mail">
							<input placeholder="Email *" name="mail" type="text" minLength="6" maxLength="52" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" value={mail} onChange={(e) => setMail(e.target.value)} required />
							{mailError && <div className="error">L'email est invalide</div>}
						</label>
						<br />
					</div>

					<label htmlFor="message">
						<textarea name="message" type="text" placeholder="Message *" minLength="12" maxLength="300" value={message} onChange={(e) => setMessage(e.target.value)} required />
						{messageError && <div className="error">Minimum de 12 caractères</div>}
					</label>
					<br />
				</div>
				<input type="submit" value="Envoyer" className="submit" />
				{messageSent && (
					<div className="message-sent">
						<img src={email} alt="sent" />
					</div>
				)}
			</form>
		</div>
	);
};

export default ContactForm;
