import React from "react";
import Navbar from "./navbar.jsx"
import Hero from "./hero.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Hero />
		</div>
	);
};

export default Home;
