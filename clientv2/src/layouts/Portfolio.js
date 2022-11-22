import React, { useState } from "react";

import TitleUnderline from "../components/TitleUnderline";
import FullScreenPicture from "../components/FullScreenPicture";
import Grid from "../components/Grid";


const Portfolio = () => {
	const [fullScreen, setFullScreen] = useState(false);
	const [picSrc, setPicSrc] = useState("");
    const [portfolioDisplayed, setPortfolioDisplayed] = useState(false);

	document.addEventListener("scroll", () => {
		if (window.scrollY >= 100) setPortfolioDisplayed(true) 
	})

	const handleSlideRight = () => {
		document.getElementById("portfolioGrid").scrollLeft += 500;
	};
	const handleSlideLeft = () => {
		document.getElementById("portfolioGrid").scrollLeft -= 500;
	};
	return (
		<div className="home-page__section portfolio-section" id="portfolioSection">
			{fullScreen && <FullScreenPicture picSrc={picSrc} setFullScreen={setFullScreen} />}
			{portfolioDisplayed && <h2>Portfolio</h2>}
			{portfolioDisplayed && <TitleUnderline />}
			<div className="portfolio-section__content">
				<div className="portfolio-section__content--grid" id="portfolioGrid">
					<div className="portfolio-grid">{portfolioDisplayed && <Grid setFullScreen={setFullScreen} setPicSrc={setPicSrc} />}</div>
				</div>
				{portfolioDisplayed && (
					<button className="slide-button slide-right" type="button" onClick={handleSlideRight}>
						&#8641;
					</button>
				)}
				{portfolioDisplayed && (
					<button className="slide-button slide-left" type="button" onClick={handleSlideLeft}>
						&#8637;
					</button>
				)}
			</div>
		</div>
	);
};

export default Portfolio;
