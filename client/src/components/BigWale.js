import React from "react";

// img
const bigWale8 = require("../assets/bigwale/big-wale88.png");
const bigWale7 = require("../assets/bigwale/big-wale77.png");
const bigWale6 = require("../assets/bigwale/big-wale66.png");
const bigWale5 = require("../assets/bigwale/big-wale55.png");
const bigWale4 = require("../assets/bigwale/big-wale44.png");
const bigWale3 = require("../assets/bigwale/big-wale33.png");

const BigWale = () => {
	const handleWaleParallax = (e) => {
		console.log(e.clientX);

		document.querySelectorAll(".item").forEach((item) => {
			let movement = item.getAttribute("data-value");
			let x = (e.clientX * movement) / 250;
			let y = (e.clientY * movement) / 250;

			item.style.transform = `translate(${x}px, ${y}px)`;
			// translate 3d ?
		});
	};
	return (
		<div className="big-wale-container" onMouseMove={(e) => handleWaleParallax(e)}>
			<div className="corrector">
				<img src={bigWale8} alt="big-wale" id="bigWaleCloudThree" className="item" data-value="0" />
				<img src={bigWale7} alt="big-wale" id="bigWaleCloudTwo" className="item" data-value="-2" />
				<img src={bigWale6} alt="big-wale" id="bigWaleCloudOne" className="item" data-value="2" />
				<img src={bigWale5} alt="big-wale" id="bigWaleWale" className="item" data-value="3" />
				<img src={bigWale4} alt="big-wale" id="bigWaleBoat" className="item" data-value="5" />
				<img src={bigWale3} alt="big-wale" id="bigWaleMoon" className="item" data-value="-1" />
			</div>
		</div>
	);
};

export default BigWale;
