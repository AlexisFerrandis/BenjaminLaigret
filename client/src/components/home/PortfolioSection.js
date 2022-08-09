import React, { useState } from "react";
import TitleUnderline from "../components/TitleUnderline";
import FullScreenPicture from "./Portfolio/FullScreenPicture";

import Grid from "./Portfolio/Grid";

const PortfolioSection = () => {
	const [fullScreen, setFullScreen] = useState(false);
	const [picSrc, setPicSrc] = useState("");

	const handleSlideRight = () => {
		document.getElementById("portfolioGrid").scrollLeft += 500;
	};
	const handleSlideLeft = () => {
		document.getElementById("portfolioGrid").scrollLeft -= 500;
	};
	return (
		<div className="home-page__section portfolio-section" id="portfolioSection">
			{fullScreen && <FullScreenPicture picSrc={picSrc} setFullScreen={setFullScreen} />}
			<h2>Portfolio</h2>
			<TitleUnderline />
			<div className="portfolio-section__content">
				<div className="portfolio-section__content--grid" id="portfolioGrid">
					<div className="portfolio-grid">
						<Grid setFullScreen={setFullScreen} setPicSrc={setPicSrc} />
					</div>
				</div>
				<button className="slide-button slide-right" type="button" onClick={handleSlideRight}>
					&#8641;
				</button>
				<button className="slide-button slide-left" type="button" onClick={handleSlideLeft}>
					&#8637;
				</button>
			</div>
		</div>
	);
};

export default PortfolioSection;
