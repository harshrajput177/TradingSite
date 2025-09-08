import React from "react";
import "../../Style/Herosec3.css";
import mainChart from "../../Images/T16277_Blog-post-on-24-hour-trading-in-equities-markets_Featured-Image 1.png"; // background trading chart image
import profitCard from "../../Images/Group 6.png"; // profit overlay image (₹6,500)

const TradingPerformance = () => {
  return (
    <div className="trading-performance">
      {/* Left Section */}
      <div className="trading-text">
        <span className="badge">TRADING PERFORMANCE</span>
        <h1>Boost portfolio performance<br />by up to 65%</h1>
        <p>
          Unify market analysis, order execution, and strategy automation on one intuitive platform.
          Eliminate manual errors and trade with unmatched consistency.
        </p>
        <ul>
          <li> Execute faster with real-time order management and smart routing</li>
          <li> Automate trading strategies with rule-based triggers and backtesting</li>
          <li> Monitor P&L, open orders, and market trends in a single dashboard</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="trading-image">
        <img src={mainChart} alt="Trading Chart" className="main-img" />
        <img src={profitCard} alt="₹6,500 Daily Average Profit" className="overlay-img" />
      </div>
    </div>
  );
};

export default TradingPerformance;
