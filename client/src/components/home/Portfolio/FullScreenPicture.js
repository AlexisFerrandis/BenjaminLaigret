import React from "react";

const FullScreenPicture = ({ picSrc, setFullScreen }) => {
	const handleCloseFullScreen = () => {
		setTimeout(() => {
			setFullScreen(false);
		}, 500);

		const fullScreenPicture = document.getElementById("fullScreenPicture");
		fullScreenPicture.style.animation = "close-full-screen 500ms cubic-bezier(0.66, 0, 0.3, 0.98)";
	};
	return (
		<div id="fullScreenPicture" className="full-screen-container" onClick={handleCloseFullScreen}>
			<div className="full-screen-container__content">
				<img src={picSrc} alt="full screen" />
			</div>
		</div>
	);
};

export default FullScreenPicture;
