import React, { useState } from "react";

import logo from "../assets/logos/logo.png"

const bigWaleCThree = require("../assets/bigwale/big-wale88.png");
const bigWaleCTwo = require("../assets/bigwale/big-wale77.png");
const bigWaleCOne = require("../assets/bigwale/big-wale66.png");
const bigWaleWale = require("../assets/bigwale/big-wale55.png");
const bigWaleBoat = require("../assets/bigwale/big-wale44.png");
const bigWaleMoon = require("../assets/bigwale/big-wale33.png");

const Header = () => {
    const [waleX, setWaleX] = useState();
	const [waleY, setWaleY] = useState();

	document.addEventListener("mousemove", (e) => {
		setWaleX(e.clientX);
		setWaleY(e.clientY);
	});

	document.querySelectorAll(".item").forEach((item) => {
		let movement = item.getAttribute("data-value");
		let x = (waleX * movement) / 250;
		let y = (waleY * movement) / 250;

		item.style.transform = `translate(${x}px, ${y}px)`;
	});

	return (
		<div className="header" id="home">
			<div className="header__logo">
                <a href="#home">
                    <img src={logo} alt="Benjamin Laigret Logo" />
                </a>
            </div>
            <div className="header__separator"></div>
            <nav className="header__nav">
                <ul>
                    <li className="header__nav--link">
                        <a href="#portfolioSection">Portfolio</a>
                    </li>
                    <li className="header__nav--link">
                        <a href="#aboutSection">À propos</a>
                    </li>
                    <li className="header__nav--link">
                        <a href="#contactSection">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="header__illustration">
                    
                    <div className="big-wale-container">
                    <div className="corrector">
                        <img src={bigWaleCThree} alt="big-wale" id="bigWaleCloudThree" className="item" data-value="0" />
                        <img src={bigWaleCTwo} alt="big-wale" id="bigWaleCloudTwo" className="item" data-value="-2" />
                        <div id="bigWaleCMove"></div>
                        <img src={bigWaleCOne} alt="big-wale" id="bigWaleCloudOne" className="item" data-value="-3" />
                        <img src={bigWaleWale} alt="big-wale" id="bigWaleWale" className="item" data-value="4" />
                        <div className="big-wale-boat">
                            <img src={bigWaleBoat} alt="big-wale" id="bigWaleBoat" className="item" data-value="10" />
                        </div>
                        <img src={bigWaleMoon} alt="big-wale" id="bigWaleMoon" className="item" data-value="-1" />
                    </div>
                </div>
                {/* <div className="skills">
                    <p className="skill" id="skillsOne">
                        graphisme
                    </p>

                    <p className="skill" id="skillsTwo">
                        illustration
                    </p>

                    <p className="skill" id="skillsThree">
                        motion design
                    </p>
                </div> */}
            </div>
		</div>
	);
};

export default Header;
