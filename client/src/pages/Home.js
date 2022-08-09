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

	// scroll handler
	useEffect(() => {
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
			<HomeSection />
			<PortfolioSection />
			<AboutSection />
			<ContactSection />
		</div>
	);
};

export default Home;
