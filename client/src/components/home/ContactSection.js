import React, { useEffect } from "react";
import TitleUnderline from "../components/TitleUnderline";
import ContactForm from "./ContactForm";

//img
import location from "./../../assets/contact/location.svg";
import phone from "./../../assets/contact/phone.svg";
import email from "./../../assets/contact/email.svg";

import instagram from "./../../assets/contact/instagram.svg";
import linkedin from "./../../assets/contact/linkedin.svg";

const ContactSection = ({ contactDisplayed }) => {
	useEffect(() => {
		const items = document.querySelectorAll(".item");
		for (let i = 0; i < items.length; i++) {
			items[i].style.animationDelay = `${200 * i}ms`;
		}
		const links = document.querySelectorAll(".social-link");
		for (let i = 0; i < links.length; i++) {
			links[i].style.animationDelay = `${1000 + 600 * i}ms`;
		}
	});
	return (
		<div className="home-page__section contact-section" id="contactSection">
			{contactDisplayed && <h2>Contact</h2>}
			{contactDisplayed && <TitleUnderline />}
			{contactDisplayed && (
				<div className="contact-section__content">
					<div className="contact-section__content--left-part">
						<div className="item">
							<img src={location} alt="location" />
							<p>Paris</p>
						</div>
						<div className="item">
							<img src={email} alt="email" />
							<a href="mailto:benjamin.laigret@hotmail.fr" target="_blank" rel="noopener noreferrer">
								benjamin.laigret@hotmail.fr
							</a>
						</div>
						<div className="item">
							<img src={phone} alt="phone" />
							<a href="tel:06.33.68.33.50">06.33.68.33.50</a>
						</div>
						<div className="social-links">
							<a href="https://www.instagram.com/benjamin_laigret/" target="blank">
								<img src={instagram} alt="instagram" className="social-link" />
							</a>
							<a href="https://www.linkedin.com/in/benjamin-laigret-056997106/" target="blank">
								<img src={linkedin} alt="linkedin" className="social-link" />
							</a>
						</div>
					</div>
					<ContactForm />
				</div>
			)}
		</div>
	);
};

export default ContactSection;
