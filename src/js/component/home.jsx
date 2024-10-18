import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx"
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container text-center">
				<div className="row mb-4 row-cols-md-1">
					<div className="col-3 col-md-1 ">
						<Card imagen="https://content.elmueble.com/medio/2023/05/25/cachorros-de-labrador_1581ee18_230525142522_1000x667.jpg" />
					</div>
					<div className="col-3 col-md-1">
						<Card imagen="https://www.bicaalu.com/wp-content/uploads/videos_de_perritos_y_gatitos_en_internet.jpg" />
					</div>
					<div className="col-3 col-md-1">
						<Card imagen="https://tvazteca.brightspotcdn.com/38/e6/7b33cdd042d5a378d56a7f81fa73/perritos-primeros-auxilios.jpg" />
					</div>
					<div className="col-3 col-md-1">
						<Card imagen="https://billiken.lat/wp-content/uploads/2024/02/dt-17.jpg" />
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
