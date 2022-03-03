import React from "react";
import { Data } from "./Data";
import ProductList from "./ProductList";
import "../styles/product.css";
function Product() {
  return (
    <div className="product">
      <h1 className="productTitle">our products</h1>
      <div className="productList">
        {Data.map((d) => {
          return (
            <ProductList
              name={d.name}
              disc={d.disc}
              price={d.price}
              image={d.Image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Product;
