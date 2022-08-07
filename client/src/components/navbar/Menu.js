import React from "react";
import { NavLink } from "react-router-dom";

const MenuBtn = ({ menuDisplay, setMenuDisplay, setMenuActive }) => {
	const handleClosingMenu = () => {
		setMenuDisplay(false);
		setTimeout(() => {
			setMenuActive(false);
		}, 500);
	};
	return (
		<div className="menu-container">
			<div className={menuDisplay ? "menu-container__transformed" : "menu-container__to-transform"}>
				<ul className="menu-container__nav">
					<li className={menuDisplay ? "links__transformed" : "links__to-transform"} id="homeLink">
						<NavLink to="/" onClick={handleClosingMenu}>
							ACCUEIL
						</NavLink>
					</li>
					<li className={menuDisplay ? "links__transformed" : "links__to-transform"} id="portfolioLink">
						<NavLink to="/portfolio" onClick={handleClosingMenu}>
							PORTFOLIO
						</NavLink>
					</li>
					<li className={menuDisplay ? "links__transformed" : "links__to-transform"} id="aboutLink">
						<NavLink to="/about" onClick={handleClosingMenu}>
							À PROPOS
						</NavLink>
					</li>
					<li className={menuDisplay ? "links__transformed" : "links__to-transform"} id="contactLink">
						<NavLink to="/contact" onClick={handleClosingMenu}>
							CONTACT
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default MenuBtn;
