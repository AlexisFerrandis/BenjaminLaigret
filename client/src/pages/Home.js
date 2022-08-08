import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BigWale from "../components/BigWale";

import HomeSection from "../components/home/HomeSection";
import PortfolioSection from "../components/home/PortfolioSection";
import AboutSection from "../components/home/AboutSection";
import ContactSection from "../components/home/ContactSection";

const Home = ({ context }) => {
	// const [isAnimated, setIsAnimated] = useState(false);
	// const navigate = useNavigate();

	// scroll handler
	useEffect(() => {
		let section = document.getElementById(context);
		section.scrollIntoView({ behavior: "smooth" });
	}, [context]);

	// const handleScroll = (e) => {
	// 	if (isAnimated === false) {
	// 		setIsAnimated(true);
	// 		setTimeout(() => {
	// 			setIsAnimated(false);
	// 		}, 500);
	// 		switch (context) {
	// 			case "homeSection":
	// 				if (e.nativeEvent.wheelDelta > 0) {
	// 					return;
	// 				} else {
	// 					navigate("/portfolio");
	// 				}
	// 				break;
	// 			case "portfolioSection":
	// 				if (e.nativeEvent.wheelDelta > 0) {
	// 					navigate("/");
	// 				} else {
	// 					navigate("/about");
	// 				}
	// 				break;
	// 			case "aboutSection":
	// 				if (e.nativeEvent.wheelDelta > 0) {
	// 					navigate("/portfolio");
	// 				} else {
	// 					navigate("/contact");
	// 				}
	// 				break;
	// 			case "contactSection":
	// 				if (e.nativeEvent.wheelDelta > 0) {
	// 					navigate("/about", { replace: true });
	// 				} else {
	// 					return;
	// 				}
	// 				break;

	// 			default:
	// 				break;
	// 		}
	// 	} else if (isAnimated) {
	// 		return;
	// 	} else {
	// 		return;
	// 	}
	// };

	return (
		// onWheel={(e) => handleScroll(e)}
		<div className="home-page">
			<BigWale />
			<HomeSection />
			<PortfolioSection />
			<AboutSection />
			<ContactSection />
		</div>
	);
};

export default Home;
