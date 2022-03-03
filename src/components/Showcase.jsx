import React from "react";
import { motion } from "framer-motion";

import { NavLink } from "react-router-dom";
import banner from "../assets/banner.jpg";
import "../styles/Showcase.css";
function Showcase() {
  return (
    <div>
      <motion.div
        className="home"
        animate={{ x: [-500, 5, 5] }}
        transition={{ duration: 1.2 }}
      >
        <div className="left">
          <h1>if this phone is not useful we will return your money back</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
            animi. Libero optio nobis inventore praesentium odio labore vitae
            vel et quisquam ipsam, commodi quia excepturi. Dolore odit
            laboriosam repellendus? Rem.
          </p>
          <NavLink to="/product">
            <button>go to cart</button>
          </NavLink>
        </div>
        <div className="right">
          <img src={banner} alt="" />
        </div>
      </motion.div>
    </div>
  );
}

export default Showcase;
