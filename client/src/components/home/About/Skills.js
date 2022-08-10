import React from "react";

// img
import photoshop from "../../../assets/about/photoshop.svg";
import illustrator from "../../../assets/about/illustrator.svg";
import afterEffect from "../../../assets/about/after-effect.svg";
import indesign from "../../../assets/about/indesign.svg";
import premiere from "../../../assets/about/premiere.svg";
import maya from "../../../assets/about/maya.png";

import school from "../../../assets/about/school.svg";

import design from "../../../assets/about/design.svg";
import camera from "../../../assets/about/camera.svg";

const Skills = () => {
	return (
		<div className="about-section__content--skills-part">
			<div className="skills">
				<div className="skill">
					<img src={photoshop} alt="photoshop" />
				</div>
				<div className="skill">
					<img src={illustrator} alt="illustrator" />
				</div>
				<div className="skill">
					<img src={afterEffect} alt="after-effect" />
				</div>
				<div className="skill">
					<img src={indesign} alt="in-design" />
				</div>
				<div className="skill">
					<img src={premiere} alt="premiere" />
				</div>
				<div className="skill" id="maya">
					<img src={maya} alt="maya" />
				</div>
			</div>

			<div className="hobbies">
				<div className="hobby">
					<img src={school} alt="school" />
					<p>Emile Cohl</p>
				</div>
				<div className="hobby camera-hobby">
					<h4>38</h4>
					<p>Projets</p>
				</div>
				<div className="hobby">
					<img src={design} alt="design" />
					<p>Design</p>
				</div>
				<div className="hobby">
					<img src={camera} alt="camera" />
					<p>Photographie</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
