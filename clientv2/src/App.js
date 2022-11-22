import About from "./layouts/About";
import Contact from "./layouts/Contact";
import Header from "./layouts/Header"
import NavBar from "./layouts/NavBar";
import Portfolio from "./layouts/Portfolio";

const App = () => {
	return (
		<div className="App">
			<NavBar />
			
			<Header />
			<Portfolio />
			<About />
			<Contact />
		</div>
	);
};

export default App;
