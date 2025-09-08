import React from "react";
import "../../Style/Herosec2.css";
import img1 from '../../Images/streamline-freehand_trading-graph.png'
import img2 from '../../Images/Vector (1).png'
import img3 from '../../Images/Vector.png'

const TradingJourney = () => {
  return (
    <section className="trading-journey">
      <div className="tj-header">
        <h2>Here’s how Algotriton <br />powers your trading journey</h2>
        <p>
          Build smarter, faster, and more profitable trading experiences —
          understand market behavior, automate strategies, minimize risk, and
          scale confidently.
        </p>
      </div>

      <div className="tj-cards">
        <div className="tj-card fade-in">
          <img src={img1} alt="" />
           <div className="line-sp-empower"></div>
          <h3  className="empower">Empower traders with precision</h3>
         
          <p  className="empower-p">
            Deliver a clean, responsive UI with real-time data, smart charts,
            and fast order execution — giving traders full control with zero
            clutter.
          </p>
        </div>

        <div className="tj-card tj-blue fade-in">
          <img src={img2} alt="" className="tj-icon"/>
           <div className="line-sp"></div>
          <h3>Support your strategies</h3>
          
          <p>
            Equip users with customizable tools, backtesting capabilities, and
            automated signals helping them make data-driven decisions
            effortlessly.
          </p>
        </div>

        <div className="tj-card tj-blue fade-in">
          <img src={img3} alt=""  className="tj-icon" />
           <div className="line-sp"></div>
          <h3>Scale without the stress</h3>
         
          <p>
            Built for performance and scalability, our platform adapts to your
            needs — from individual investors to large brokerage operations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TradingJourney;
