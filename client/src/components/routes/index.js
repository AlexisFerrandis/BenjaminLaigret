import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "../navbar/NavBar";

import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";

const index = () => {
	return (
		<div>
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" exact element={<Home />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
};

export default index;
