import React from "react";

const FullScreenPicture = ({ picSrc, setFullScreen }) => {
	const colors = ["#232665", "#35539b", "#5a83c1", "#15153b"];
	let randomColor = colors[Math.floor(Math.random() * colors.length)];
	const color = randomColor + "BB";

	const handleCloseFullScreen = () => {
		setTimeout(() => {
			setFullScreen(false);
		}, 450);

		const fullScreenPicture = document.getElementById("fullScreenPicture");
		fullScreenPicture.style.animation = "close-full-screen 500ms cubic-bezier(0.66, 0, 0.3, 0.98)";

		const picture = document.getElementById("picture");
		picture.style.animation = "img-disappaer 500ms cubic-bezier(0.66, 0, 0.3, 0.98)";
	};
	return (
		<div id="fullScreenPicture" className="full-screen-container" onClick={handleCloseFullScreen} style={{ backgroundColor: color }}>
			<div className="full-screen-container__content">
				<img src={picSrc} alt="full screen" id="picture" />
			</div>
		</div>
	);
};

export default FullScreenPicture;
