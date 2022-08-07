import React, { useState } from "react";
import BigWale from "../components/BigWale";

const Home = () => {
	const [waleX, setWaleX] = useState(0);
	const [waleY, setWaleY] = useState(0);

	const handleWaleParallax = (e) => {
		console.log(e);
		setWaleX(e.clientX);
		setWaleY(e.clientY);
	};

	return (
		<div className="home-page" onMouseMove={(e) => handleWaleParallax(e)}>
			<BigWale waleX={waleX} waleY={waleY} />
			<div className="hero-container">
				<h1>
					BENJAMIN
					<br />
					LAIGRET
				</h1>
			</div>
		</div>
	);
};

export default Home;
