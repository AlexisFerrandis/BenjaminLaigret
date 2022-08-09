import React from "react";
import TitleUnderline from "../components/TitleUnderline";
import Skills from "./About/Skills";

const AboutSection = () => {
	return (
		<div className="home-page__section  about-section" id="aboutSection">
			<h2>À propos</h2>
			<TitleUnderline />
			<div className="about-section__content">
				<Skills />
				<div className="about-section__content--character-part"></div>
			</div>
		</div>
	);
};

export default AboutSection;
