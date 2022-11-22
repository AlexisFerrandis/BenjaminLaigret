import React from "react";


const Menu = ({ menuDisplay, setMenuDisplay, setMenuActive }) => {
    
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
                    <a href="#home"  onClick={handleClosingMenu}>
                        ACCUEIL
                    </a>
                </li>
                <li className={menuDisplay ? "links__transformed" : "links__to-transform"} id="portfolioLink">
                    <a href="#portfolioSection"  onClick={handleClosingMenu}>
                        PORTFOLIO
                    </a>
                </li>
                <li className={menuDisplay ? "links__transformed" : "links__to-transform"} id="aboutLink">
                    <a href="#aboutSection"  onClick={handleClosingMenu}>
                        À PROPOS
                    </a>
                </li>
                <li className={menuDisplay ? "links__transformed" : "links__to-transform"} id="contactLink">
                    <a href="#contactSection"  onClick={handleClosingMenu}>
                        CONTACT
                    </a>
                </li>
            </ul>
        </div>
    </div>
	);
};

export default Menu;
