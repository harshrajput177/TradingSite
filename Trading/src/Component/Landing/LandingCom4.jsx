import React from "react";
import { motion } from "framer-motion";
import "../../Style/Herosec4.css";
import img1 from '../../Images/photo-1-5.png';
import img2 from "../../Images/photo-4-1.png"

const AutomatedTradeExecution = () => {
  return (
    <div className="Comp4-trade-section">
      <motion.div
        className="Comp4-trade-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >

         <img src={img2} alt=""     className="Comp4-trade-image"/>
        <img
          src={img1}
          alt="Trade Mobile"
          className="Comp4-trade-image-second"
        />
       
      </motion.div>

      <motion.div
        className="Comp4-trade-content"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <span className="Comp4-tag">Easy Trade</span>
        <h2>Automated Trade Execution</h2>
        <p className="Comp4-description">
          Trade smarter, not harder. Our automation engine helps you capture
          every opportunity without constant monitoring.
        </p>

        <ul className="Comp4-features">
          <li> Create rule-based buy/sell strategies with a simple drag-and-drop interface</li>
          <li>
             Backtest strategies on historical data before going live
          </li>
          <li> Receive instant alerts when market conditions meet your parameters</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default AutomatedTradeExecution;
