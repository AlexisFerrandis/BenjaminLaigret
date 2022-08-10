import React from "react";
import TitleUnderline from "../components/TitleUnderline";
import Character from "./About/Character";
import Skills from "./About/Skills";

const AboutSection = ({ aboutDisplayed }) => {
	return (
		<div className="home-page__section  about-section" id="aboutSection">
			{aboutDisplayed && <h2>À propos</h2>}
			{aboutDisplayed && <TitleUnderline />}
			<div className="about-section__content">
				{aboutDisplayed && <Skills />}
				{aboutDisplayed && <Character />}
			</div>
		</div>
	);
};

export default AboutSection;
