import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Menu from "./Menu";

const TopNavBar = () => {
	const [menuDisplay, setMenuDisplay] = useState(false);
	const [menuActive, setMenuActive] = useState(false);

	const handleMenuDisplay = () => {
		if (menuDisplay) {
			setMenuDisplay(false);
			setTimeout(() => {
				setMenuActive(false);
			}, 500);
		} else {
			setMenuActive(true);
			setMenuDisplay(true);
		}
	};
	return (
		<>
			<div className="top-nav-bar">
				<NavLink className="top-nav-bar__name" to="/">
					Benjamin Laigret
				</NavLink>
				<div className="top-nav-bar__links">
					<div className={menuDisplay ? "opened-menu-btn" : "menu-btn"} onClick={handleMenuDisplay}></div>
				</div>
			</div>
			{menuActive && <Menu menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} setMenuActive={setMenuActive} />}
		</>
	);
};

export default TopNavBar;
