import React from "react";
import BigWale from "../components/BigWale";
import TitleUnderline from "../components/components/TitleUnderline";

const Home = () => {
	return (
		<div className="home-page">
			<BigWale />
			<div className="hero-container">
				<h1>
					BENJAMIN
					<br />
					LAIGRET
				</h1>
				<TitleUnderline />
				<p>
					graphisme
					<br />
					illustration
					<br />
					motion design
				</p>
			</div>
		</div>
	);
};

export default Home;
