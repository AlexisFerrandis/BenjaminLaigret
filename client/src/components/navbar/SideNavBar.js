import React from "react";
import { NavLink } from "react-router-dom";

const SideNavBar = () => {
	return (
		<div className="side-nav-bar">
			<NavLink to="/" className={(state) => (state.isActive ? "is-active" : "")}>
				<div className="side-nav-bar__link"></div>
			</NavLink>
			<NavLink to="/portfolio" className={(state) => (state.isActive ? "is-active" : "")}>
				<div className="side-nav-bar__link"></div>
			</NavLink>
			<NavLink to="/about" className={(state) => (state.isActive ? "is-active" : "")}>
				<div className="side-nav-bar__link"></div>
			</NavLink>
			<NavLink to="/contact" className={(state) => (state.isActive ? "is-active" : "")}>
				<div className="side-nav-bar__link"></div>
			</NavLink>
		</div>
	);
};

export default SideNavBar;
