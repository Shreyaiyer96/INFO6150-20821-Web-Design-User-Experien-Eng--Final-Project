// rafce -> shortcut to create component and export
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Yoga from "./pages/newPages/Yoga";
import Login from "./pages/login/login";
import Kitboxing from "./pages/newPages/Kitboxing";
import DanceFitness from "./pages/newPages/DanceFitness";
import WeightLifting from "./pages/newPages/WeightLifting";
import Products from "./pages/Products/Products";
import { useState, useEffect} from 'react';
import {commerce} from "./pages/lib/commerce"


const App = () => {
	
	const[products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    useEffect (()=>{
        fetchProducts();

    }, []);

	return(

		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="Products" element={<Products products={ products } />} />
				<Route path="plans" element={<Plans />} />
				<Route path="trainers" element={<Trainers />} />
				<Route path="login" element={<Login />} />
				<Route path="newPages" element={<Yoga />} />
				<Route path="newPages" element={<Kitboxing />} />
				<Route path="newPages" element={<DanceFitness />} />
				<Route path="newPages" element={<WeightLifting />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
};

export default App;
