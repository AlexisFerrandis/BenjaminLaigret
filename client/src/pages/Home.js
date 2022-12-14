import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import BigWale from "../components/BigWale";

import HomeSection from "../components/home/HomeSection";
import PortfolioSection from "../components/home/PortfolioSection";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";

const Home = ({ context }) => {
	const [isAnimated, setIsAnimated] = useState(false);
	const navigate = useNavigate();
	const wheelTimeout = useRef();

	const [homeDisplayed, setHomeDisplayed] = useState(false);
	const [portfolioDisplayed, setPortfolioDisplayed] = useState(false);
	const [aboutDisplayed, setAboutDisplayed] = useState(false);
	const [contactDisplayed, setContactDisplayed] = useState(false);

	// scroll handler
	useEffect(() => {
		// first time display
		if (context === "homeSection") setHomeDisplayed(true);
		if (context === "portfolioSection") setPortfolioDisplayed(true);
		if (context === "aboutSection") setAboutDisplayed(true);
		if (context === "contactSection") setContactDisplayed(true);

		// scroll to
		let section = document.getElementById(context);
		section.scrollIntoView({ behavior: "smooth" });
	}, [context]);

	const handleScroll = (e) => {
		// if on grid on portfolio cancel
		// if (e.target.className === "portoflio-illustration") {
		// 	return;
		// }
		// if not already animated navigate to
		if (isAnimated === false) {
			setIsAnimated(true);

			switch (context) {
				case "homeSection":
					if (e.nativeEvent.wheelDelta > 0) {
						navigate("/");
					} else {
						navigate("/portfolio");
					}
					break;
				case "portfolioSection":
					if (e.nativeEvent.wheelDelta > 0) {
						navigate("/");
					} else {
						navigate("/about");
					}
					break;
				case "aboutSection":
					if (e.nativeEvent.wheelDelta > 0) {
						navigate("/portfolio");
					} else {
						navigate("/contact");
					}
					break;
				case "contactSection":
					if (e.nativeEvent.wheelDelta > 0) {
						navigate("/about");
					} else {
						navigate("/contact");
					}
					break;

				default:
					break;
			}
			// animation timeout
			setTimeout(() => {
				setIsAnimated(false);
			}, 500);
			clearTimeout(wheelTimeout.current);
			wheelTimeout.current = setTimeout(() => {
				wheelTimeout.current = false;
			}, 500);
		}
	};

	// handle prevent default
	useEffect(() => {
		const cancelWheel = (e) => wheelTimeout.current && e.preventDefault();
		document.body.addEventListener("wheel", cancelWheel, { passive: false });
		return () => document.body.removeEventListener("wheel", cancelWheel);
	}, []);

	return (
		<div className="home-page" onWheel={(e) => handleScroll(e)}>
			<BigWale />
			<HomeSection homeDisplayed={homeDisplayed} />
			<PortfolioSection portfolioDisplayed={portfolioDisplayed} />
			<AboutSection aboutDisplayed={aboutDisplayed} />
			<ContactSection contactDisplayed={contactDisplayed} />
		</div>
	);
};

export default Home;
