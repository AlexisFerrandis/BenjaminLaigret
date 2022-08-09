import React, { useEffect } from "react";

// img
import grid0 from "../../../assets/portfolio/grid0-min.jpg";
import grid1 from "../../../assets/portfolio/grid1-min.jpg";
import grid2 from "../../../assets/portfolio/grid2-min.jpg";
import grid3 from "../../../assets/portfolio/grid3-min.jpg";
import grid4 from "../../../assets/portfolio/grid4-min.jpg";
import grid5 from "../../../assets/portfolio/grid5-min.jpg";
import grid6 from "../../../assets/portfolio/grid6-min.jpg";
import grid7 from "../../../assets/portfolio/grid7-min.jpg";
import grid8 from "../../../assets/portfolio/grid8-min.jpg";
import grid9 from "../../../assets/portfolio/grid9-min.jpg";
import grid10 from "../../../assets/portfolio/grid10-min.jpg";
import grid11 from "../../../assets/portfolio/grid11-min.jpg";
import grid12 from "../../../assets/portfolio/grid12-min.jpg";
import grid13 from "../../../assets/portfolio/grid13-min.jpg";
import grid14 from "../../../assets/portfolio/grid14-min.jpg";
import grid15 from "../../../assets/portfolio/grid15-min.jpg";
import grid16 from "../../../assets/portfolio/grid16-min.jpg";
import grid17 from "../../../assets/portfolio/grid17-min.jpg";
import grid18 from "../../../assets/portfolio/grid18-min.jpg";
import grid19 from "../../../assets/portfolio/grid19-min.jpg";
import grid20 from "../../../assets/portfolio/grid20-min.jpg";
import grid21 from "../../../assets/portfolio/grid21-min.jpg";

import grid96 from "../../../assets/portfolio/grid96-min.jpg";
import grid97 from "../../../assets/portfolio/grid97-min.jpg";
import grid98 from "../../../assets/portfolio/grid98-min.jpg";

const Grid = ({ setFullScreen, setPicSrc }) => {
	const handleFullScreenPic = (e) => {
		setFullScreen(true);
		setPicSrc(e.target.src);
	};

	useEffect(() => {
		const gridItems = document.querySelectorAll(".grid-item");
		for (let i = 0; i < gridItems.length; i++) {
			gridItems[i].style.animationDelay = `${750 + 280 * i * Math.floor(Math.random() * 4)}ms`;
		}
	});

	return (
		<>
			<div id="item-0" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid0} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-1" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid1} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-2" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid2} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-3" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid3} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-4" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid4} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-5" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid5} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-5bis" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid6} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-6" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid7} alt="illustration" className="portoflio-illustration" />
			</div>

			<div id="item-7" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid8} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-8" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid9} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-9" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid10} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-10" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid11} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-11" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid12} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-12" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid13} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-13" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid14} alt="illustration" className="portoflio-illustration" />
			</div>

			<div id="item-14" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid15} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-15" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid16} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-16" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid17} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-17" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid18} alt="illustration" className="portoflio-illustration" />
			</div>

			<div id="item-97" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid97} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-98" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid98} alt="illustration" className="portoflio-illustration" />
			</div>

			<div id="item-99" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid96} alt="illustration" className="portoflio-illustration" />
			</div>

			<div id="item-18" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid19} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-19" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid20} alt="illustration" className="portoflio-illustration" />
			</div>
			<div id="item-20" className="grid-item" onClick={(e) => handleFullScreenPic(e)}>
				<img src={grid21} alt="illustration" className="portoflio-illustration" />
			</div>
		</>
	);
};

export default Grid;
