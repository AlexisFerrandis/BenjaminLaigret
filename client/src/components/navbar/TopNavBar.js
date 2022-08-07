import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// img
import instagram from "../../assets/navbar/instagram-brands.svg";
import Menu from "./Menu";

const TopNavBar = () => {
	const [menuDisplay, setMenuDisplay] = useState(false);

	const handleMenuDisplay = () => {
		setMenuDisplay(!menuDisplay);
	};
	return (
		<>
			<div className="top-nav-bar">
				<NavLink className="top-nav-bar__name" to="/">
					Benjamin Laigret
				</NavLink>
				<div className="top-nav-bar__links">
					<a href="https://www.instagram.com/benjamin_laigret/" target="blank">
						<img src={instagram} alt="instagram" />
					</a>
					<div className={menuDisplay ? "opened-menu-btn" : "menu-btn"} onClick={handleMenuDisplay}></div>
				</div>
			</div>
			<Menu menuDisplay={menuDisplay} />
		</>
	);
};

export default TopNavBar;
