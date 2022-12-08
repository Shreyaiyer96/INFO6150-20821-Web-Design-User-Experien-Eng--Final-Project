// import React from "react";
// import Header from "../../components/Header";
// import HeaderImage from "../../images/header_bg_5.jpg";
// import { BsInstagram } from "react-icons/bs";
// import { AiOutlineTwitter } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { trainers } from "../../data";
// import Trainer from "../../components/Trainer";
import "./trainers.css";

// const Trainers = () => {
// 	return (
// 		<>
// 			<Header image={HeaderImage} title="Our Trainers">
// 				Adipisicing labore laboris ea sunt cillum ea velit.Adipisicing labore la
// 				boris ea sunt cillum ea velit. sunt cillum ea velit.
// 			</Header>
// 			<section className="trainers">
// 				<div className="container trainers__container">
// 					{trainers.map(({ id, image, name, job, socials }) => {
// 						return (
// 							<Trainer
// 								key={id}
// 								image={image}
// 								name={name}
// 								job={job}
// 								socials={[
// 									{ icon: <BsInstagram />, link: socials[0] },
// 									{ icon: <AiOutlineTwitter />, link: socials[1] },
// 									{ icon: <FaFacebookF />, link: socials[2] },
// 									{ icon: <FaLinkedinIn />, link: socials[3] },
// 								]}
// 							/>
// 						);
// 					})}
// 				</div>
// 			</section>
// 		</>
// 	);
// };

// export default Trainers;



import 'bootstrap'
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import { Fragment } from "react";
//import Header from "../components-diet_plan/header/Header";
import HeroSlider from "../../components-diet_plan/hero-slider/HeroSlider";
import PopularMenu from "../../components-diet_plan/popular-menu/PopularMenu";
import ChooseUs from "../../components-diet_plan/choose-us/ChooseUs";
import MenuPack from "../../components-diet_plan/menu-pack/MenuPack";
import Testimonials from "../../components-diet_plan/testimonials/Testimonials";
import Download from "../../components-diet_plan/download-section/Downlaod";
//import Footer from "../../components-diet_plan/footer/Footer";


const DietPlan = () => {

    return <Fragment>
        <HeroSlider/>
        <PopularMenu/>
        <ChooseUs/>
        <MenuPack/>
        <Testimonials/>
        <Download/>
        </Fragment>
};

export default DietPlan;