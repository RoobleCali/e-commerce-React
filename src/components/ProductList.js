import React from "react";
import "../styles/product.css";
import { motion } from "framer-motion";
function ProductList({ name, disc, image, price }) {
  return (
    <div>
      <motion.div
        className="productItem"
        initial={{ opacity: 0, translateX: -50, translateY: -50 }}
        animate={{ opacity: 1, translateX: 0, translateY: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div>
          <img src={image} alt="" />
        </div>
        <h1>{name}</h1>
        <h4>{disc}</h4>
        <p>${price}</p>
      </motion.div>
    </div>
  );
}

export default ProductList;
