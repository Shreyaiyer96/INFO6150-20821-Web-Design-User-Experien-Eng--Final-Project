import React from "react";
import { Link } from "react-router-dom";
import "./yoga.css";

const Yoga = () => {
	return (
		<section>
			<div className="container notFound__container">
				<h2> Yoga</h2>
				"Every class has an array of breathing techniques, a variety of meditation techniques. Helps in improving confidence while gaining a stronger body."
				<img src="" alt="" />
				<Link to="/newPages" className="btn">
					Go back Home
				</Link>
			</div>
		</section>
	);
};

export default Yoga;
