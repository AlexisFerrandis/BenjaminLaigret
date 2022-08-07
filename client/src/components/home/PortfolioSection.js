import React from "react";

// assets

const illustrationPreview = require("../../assets/home/illustration-preview.jpg");
const storyboardPreview = require("../../assets/home/storyboard-preview.jpg");
const motiondesignPreview = require("../../assets/home/motiondesign-preview.mp4");

const PortfolioSection = () => {
	return (
		<div className="home-page__section portfolio-section" id="portfolioSection">
			<h1>Portfolio</h1>
			<div className="portfolio-section__content">
				<div className="portfolio-section__content--item">
					<img src={illustrationPreview} alt="illustration preview" />
				</div>
				<div className="portfolio-section__content--item">
					<img src={storyboardPreview} alt="storyboard preview" />
				</div>
				<div className="portfolio-section__content--item">
					<video src={motiondesignPreview} autoPlay loop={true} muted />
				</div>
			</div>
		</div>
	);
};

export default PortfolioSection;
