import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";


const products = [
    { id: 1, name: 'Abc', description: 'Protien', price: '$50', image:'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1642619011-asics-gel-kayano-28-1642618972.jpg'},
    { id: 2, name: 'Cbc', description: 'shoes',  price: '$50', image:'https://www.shutterstock.com/image-photo/whey-protein-powder-sports-bodybuilding-260nw-1021247299.jpg'},

];

const Products = () => {
    return ( 
    <main>
        <Grid container justify="center" spacing={4}>
            {
                products.map((product)=> (
                    <Grid item key={products.id} xs={12} ms={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                
            ))}
        </Grid>
    </main> 
    )
    

}

export default Products;