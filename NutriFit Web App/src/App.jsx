// rafce -> shortcut to create component and export
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
//import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/NotFound";
import Plans from "./pages/plans/Plans";
import DietPlan from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Yoga from "./pages/newPages/Yoga";
import Login from "./pages/login/login";
import Kickboxing from "./pages/kickboxing/Kickboxing";
import { Dance } from "./pages/dance/Dance";
import Weight from "./pages/weight/Weight";
import Products from "./pages/Products/Products";
import { useState, useEffect} from 'react';
import {commerce} from "./pages/lib/commerce"
import Cart  from "./pages/Cart/Cart" ;


const App = () => {
	
	const[products, setProducts] = useState([]);
	const [cart, setCart]= useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
		

        setProducts(data);
    }

	const fetchCart = async () => {
		setCart(await commerce.cart.retrieve());
	}


	 const handleAddToCart = async (productID, quantity) => {
	 	const item = await commerce.cart.add(productID, quantity);

	 	setCart(item.cart);

	 }

	 useEffect(() => {
		fetchProducts();
		fetchCart();

    }, []);

	return(

		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route index element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="Products" element={<Products products={products} totalItems={cart.total_items} onAddToCart={handleAddToCart}  />} />
				<Route path="Cart" element={<Cart cart={cart} />} />
				<Route path="plans" element={<Plans />} />
				<Route path="trainers" element={<DietPlan />} />
				<Route path="login" element={<Login />} />
				<Route path="newPages" element={<Yoga />} />
				<Route path="kickboxing" element={<Kickboxing />} />
				<Route path="dance" element={<Dance />} />
				<Route path="weight" element={<Weight />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	)
};

export default App;
