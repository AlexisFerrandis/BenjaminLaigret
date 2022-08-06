import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import TopNavBar from "../navbar/TopNavBar";

import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";

const index = () => {
	return (
		<div>
			<Router>
				<TopNavBar />
				<Routes>
					<Route path="/" exact element={<Home />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
};

export default index;
