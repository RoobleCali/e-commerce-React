import React from "react";
import about from "../assets/about.png";
import "../styles/About.css";
import { motion } from "framer-motion";
function About() {
  return (
    <motion.div
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="right">
        <img src={about} alt="" />
      </div>
      <div className="left">
        <h1>ABOUT US</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab iste
          nihil maiores quidem culpa, ducimus sunt vitae inventore eum illo
          consectetur quibusdam reprehenderit vero laborum quos perferendis
          accusamus alias harum quis. Laboriosam accusantium reprehenderit
          voluptatum ex enim fugiat assumenda error laborum sunt commodi unde
          voluptas, sed similique amet culpa alias veniam necessitatibus
          blanditiis pariatur dolores! Ducimus officiis placeat, eum, laudantium
          quae animi nam expedita rerum eveniet architecto enim et accusamus.
          Itaque sint provident voluptatem fugiat suscipit. Quam facere
          voluptatibus, natus nostrum eaque eum incidunt in veritatis dolores
          recusandae! Assumenda, animi.
        </p>
      </div>
    </motion.div>
  );
}

export default About;
