import React from "react";
import { NavLink } from "react-router-dom";

// img
import instagram from "../../assets/navbar/instagram-brands.svg";

const TopNavBar = () => {
	return (
		<div className="top-nav-bar">
			<NavLink className="top-nav-bar__name" to="/">
				Benjamin Laigret
			</NavLink>
			<div className="top-nav-bar__links">
				<a href="https://www.instagram.com/benjamin_laigret/" target="blank">
					<img src={instagram} alt="instagram" />
				</a>
				<div className="menu-icon">||</div>
			</div>
		</div>
	);
};

export default TopNavBar;
