import React from "react";
import TitleUnderline from "../components/TitleUnderline";

// img
import grid0 from "../../assets/portfolio/grid0.jpg";
import grid1 from "../../assets/portfolio/grid1.jpg";
import grid2 from "../../assets/portfolio/grid2.jpg";
import grid3 from "../../assets/portfolio/grid3.jpg";
import grid4 from "../../assets/portfolio/grid4.jpg";
import grid5 from "../../assets/portfolio/grid5.jpg";
import grid6 from "../../assets/portfolio/grid6.jpg";
import grid7 from "../../assets/portfolio/grid7.jpg";
import grid8 from "../../assets/portfolio/grid8.jpg";
import grid9 from "../../assets/portfolio/grid9.jpg";
import grid10 from "../../assets/portfolio/grid10.jpg";
import grid11 from "../../assets/portfolio/grid11.jpg";
import grid12 from "../../assets/portfolio/grid12.jpg";
import grid13 from "../../assets/portfolio/grid13.jpg";
import grid14 from "../../assets/portfolio/grid14.jpg";
import grid15 from "../../assets/portfolio/grid15.jpg";
import grid16 from "../../assets/portfolio/grid16.jpg";
import grid17 from "../../assets/portfolio/grid17.jpg";
import grid18 from "../../assets/portfolio/grid18.jpg";
import grid19 from "../../assets/portfolio/grid19.jpg";
import grid20 from "../../assets/portfolio/grid20.jpg";
import grid21 from "../../assets/portfolio/grid21.jpg";

const PortfolioSection = () => {
	return (
		<div className="home-page__section portfolio-section" id="portfolioSection">
			<h2>Portfolio</h2>
			<TitleUnderline />
			<div className="portfolio-section__content">
				<div className="portfolio-section__content--grid">
					<div className="angry-grid">
						<div id="item-0" className="grid-item">
							<img src={grid0} alt="illustration" />
						</div>
						<div id="item-1" className="grid-item">
							<img src={grid1} alt="illustration" />
						</div>
						<div id="item-2" className="grid-item">
							<img src={grid2} alt="illustration" />
						</div>
						<div id="item-3" className="grid-item">
							<img src={grid3} alt="illustration" />
						</div>
						<div id="item-4" className="grid-item">
							<img src={grid4} alt="illustration" />
						</div>
						<div id="item-5" className="grid-item">
							<img src={grid5} alt="illustration" />
						</div>
						<div id="item-5bis" className="grid-item">
							<img src={grid6} alt="illustration" />
						</div>
						<div id="item-6" className="grid-item">
							<img src={grid7} alt="illustration" />
						</div>

						<div id="item-7" className="grid-item">
							<img src={grid8} alt="illustration" />
						</div>
						<div id="item-8" className="grid-item">
							<img src={grid9} alt="illustration" />
						</div>
						<div id="item-9" className="grid-item">
							<img src={grid10} alt="illustration" />
						</div>
						<div id="item-10" className="grid-item">
							<img src={grid11} alt="illustration" />
						</div>
						<div id="item-11" className="grid-item">
							<img src={grid12} alt="illustration" />
						</div>
						<div id="item-12" className="grid-item">
							<img src={grid13} alt="illustration" />
						</div>
						<div id="item-13" className="grid-item">
							<img src={grid14} alt="illustration" />
						</div>

						<div id="item-14" className="grid-item">
							<img src={grid15} alt="illustration" />
						</div>
						<div id="item-15" className="grid-item">
							<img src={grid16} alt="illustration" />
						</div>
						<div id="item-16" className="grid-item">
							<img src={grid17} alt="illustration" />
						</div>
						<div id="item-17" className="grid-item">
							<img src={grid18} alt="illustration" />
						</div>
						<div id="item-18" className="grid-item">
							<img src={grid19} alt="illustration" />
						</div>
						<div id="item-19" className="grid-item">
							<img src={grid20} alt="illustration" />
						</div>
						<div id="item-20" className="grid-item">
							<img src={grid21} alt="illustration" />
						</div>
					</div>
				</div>
				<div className="opacity-effect"></div>
			</div>
		</div>
	);
};

export default PortfolioSection;
