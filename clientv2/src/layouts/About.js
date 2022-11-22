import React, { useState } from "react";
import Skills from "../components/Skills";
import Character from "../components/Character";
import TitleUnderline from "../components/TitleUnderline";



const About = () => {
    const [aboutDisplay, setAboutDisplay] = useState(false);

	document.addEventListener("scroll", () => {
		if (window.scrollY >= 838) setAboutDisplay(true) 
	})
	
	return (
		<div className="home-page__section about-section" id="aboutSection">
			{aboutDisplay && <h2>À propos</h2>}
			{aboutDisplay && <TitleUnderline />}
            <div className="about-section__content">
				{aboutDisplay && <Skills />}
				{aboutDisplay && <Character />}
			</div>
		</div>
	);
};

export default About;
