import React from "react";
import Navbar from "./navbar.jsx"
import Hero from "./hero.jsx"
import Card from "./card.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<div>
		<div class="top">
			<Navbar />
		</div>
			<div class="page">
				<Hero />
				<div class="cards">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		<div class="footer">
				<p>Copyright 2022</p>
		</div>
	</div>
	);
};

export default Home;
