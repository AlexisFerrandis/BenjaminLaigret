import React, { useState } from "react";
import Menu from "./Menu"


const NavBar = () => {
    // const state = "is-active"

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
            <div className="nav-bar">
                <div className="nav-bar__menu">
					<div className={menuDisplay ? "opened-menu-btn" : "menu-btn"} onClick={handleMenuDisplay}></div>
				</div>
                {/* <div className="nav-bar__nav">
                    <a href="#home" className={state.isActive ? "is-active" : ""}>
                        <div className="nav-bar__link"></div>
                    </a>
                    <a href="#portfolioSection" className={state.isActive ? "is-active" : ""}>
                        <div className="nav-bar__link"></div>
                    </a>
                    <a href="#aboutSection" className={state.isActive ? "is-active" : ""}>
                        <div className="nav-bar__link"></div>
                    </a>
                    <a href="#contactSection" className={state.isActive ? "is-active" : ""}>
                        <div className="nav-bar__link"></div>
                    </a>
                </div> */}
            </div>
			{menuActive && <Menu menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} setMenuActive={setMenuActive} />}
        </>
	);
};

export default NavBar;
