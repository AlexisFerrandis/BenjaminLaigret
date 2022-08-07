import React from "react";

// img
const bigWaleCThree = require("../assets/bigwale/big-wale88.png");
const bigWaleCTwo = require("../assets/bigwale/big-wale77.png");
const bigWaleCOne = require("../assets/bigwale/big-wale66.png");
const bigWaleWale = require("../assets/bigwale/big-wale55.png");
const bigWaleBoat = require("../assets/bigwale/big-wale44.png");
const bigWaleMoon = require("../assets/bigwale/big-wale33.png");

const BigWale = ({ waleX, waleY }) => {
	document.querySelectorAll(".item").forEach((item) => {
		let movement = item.getAttribute("data-value");
		let x = (waleX * movement) / 250;
		let y = (waleY * movement) / 250;

		item.style.transform = `translate(${x}px, ${y}px)`;
	});

	return (
		<div className="big-wale-container">
			<div className="corrector">
				<img src={bigWaleCThree} alt="big-wale" id="bigWaleCloudThree" className="item" data-value="0" />
				<img src={bigWaleCTwo} alt="big-wale" id="bigWaleCloudTwo" className="item" data-value="-2" />
				<div id="bigWaleCMove"></div>
				<img src={bigWaleCOne} alt="big-wale" id="bigWaleCloudOne" className="item" data-value="-3" />
				<img src={bigWaleWale} alt="big-wale" id="bigWaleWale" className="item" data-value="4" />
				<img src={bigWaleBoat} alt="big-wale" id="bigWaleBoat" className="item" data-value="10" />
				<img src={bigWaleMoon} alt="big-wale" id="bigWaleMoon" className="item" data-value="-1" />
			</div>
		</div>
	);
};

export default BigWale;
