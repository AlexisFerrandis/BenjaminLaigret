import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MenuBtn = () => {
	const [menuDisplay, setMenuDisplay] = useState(false);

	const handleMenuDisplay = () => {
		setMenuDisplay(!menuDisplay);
	};

	return (
		<div>
			<div className="menu-container">
				<div className={menuDisplay ? "menu-container__transformed" : "menu-container__to-transform"}>
					<ul className="menu-container__nav">
						<li className={menuDisplay ? "links__transformed" : "links__to-transform"} id="homeLink">
							<NavLink to="/">ACCUEIL</NavLink>
						</li>
						<li className={menuDisplay ? "links__transformed" : "links__to-transform"} id="portfolioLink">
							<NavLink to="/portfolio">PORTFOLIO</NavLink>
						</li>
						<li className={menuDisplay ? "links__transformed" : "links__to-transform"} id="aboutLink">
							<NavLink to="/about">À PROPOS</NavLink>
						</li>
						<li className={menuDisplay ? "links__transformed" : "links__to-transform"} id="contactLink">
							<NavLink to="/contact">CONTACT</NavLink>
						</li>
					</ul>
				</div>
			</div>
			<div className="menu-btn" onClick={handleMenuDisplay}></div>
		</div>
	);
};

export default MenuBtn;
