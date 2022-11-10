import React from "react";
import Product from "./Product";

function ProductList(props) {
    <main classname="Products">
       {props.products.map((product) => (
        <Product key={product.id} {...product} data={product} addToCart={props.addToCart}/>
       ))}
      </main>
}

export default ProductList;