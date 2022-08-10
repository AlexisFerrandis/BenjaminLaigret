import React, { useEffect } from "react";

// img
// import canard from "../../../assets/about/canard.jpg";

const Character = () => {
	useEffect(() => {
		const paragraphs = document.querySelectorAll("p");
		for (let i = 0; i < paragraphs.length; i++) {
			paragraphs[i].style.animationDelay = `${1000 + 200 * i}ms`;
		}
	});
	return (
		<div className="about-section__content--character-part">
			<div className="header">{/* <img src={canard} alt="canard" className="canard-head" /> */}</div>
			<div className="content">
				<p>
					Passionné par le <span>dessin</span> et <span>l’animation</span> depuis l’enfance, le métier de graphiste s’est imposé comme une évidence.
				</p>
				<p>
					J'exerce en tant que <span>graphiste</span> freelance à Paris depuis 2017.
				</p>
				<p>
					Mon expérience et mon intérêt pour les arts graphiques sont devenus des atouts dans la <span>création</span> de mes projets. Mon attrait pour les illustrations et l’animation m’a conduit à en faire ma spécialité.
				</p>
				<p>
					Je sais m’adapter, que ce soit un projet de <span>vidéo 2D</span> (motion design, réalisation de formats courts, animation de logos…), de <span>l’illustration</span> (character design, illustrations jeunesse, couvertures, jeux…), ou de <span>mis en page</span> (magazine, dépliant, brochure…).
				</p>
				<p>
					J'aime travailler avec tout type de <span>structures</span>, particuliers, entreprises, associations et agence de communication.
				</p>
				<p className="contact">N’hésitez pas à me contacter pour discuter de votre projet !</p>
			</div>
			<div className="footer"></div>
		</div>
	);
};

export default Character;
