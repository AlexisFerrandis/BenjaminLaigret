import React from "react";
import TitleUnderline from "../components/TitleUnderline";

const HomeSection = ({ homeDisplayed }) => {
	return (
		<div className="home-page__section" id="homeSection">
			{homeDisplayed && (
				<div className="home-page__section--hero-container">
					<h1>
						BENJAMIN
						<br />
						LAIGRET
					</h1>
					<TitleUnderline />
					<div className="skills">
						<p className="skill" id="skillsOne">
							graphisme
						</p>

						<p className="skill" id="skillsTwo">
							illustration
						</p>

						<p className="skill" id="skillsThree">
							motion design
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default HomeSection;
