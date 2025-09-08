import React from "react";
import "../../Style/HeroSection1.css";
import dashboard from "../../Images/b17c7ed8d67fe3f1b91cc8345287c1599261185f.png";
import img1 from "../../Images/89c937326b7cf735d7fa44af229377fe41e703eb.png"
// import img2 from "../../Images/fd03185d5f6ba2b37122adcf5c1ed6e1f408e805.png"
import img3 from "../../Images/0f96125a3995a70c044e97f774ed058661bf2700.png"
import img4 from "../../Images/0f96125a3995a70c044e97f774ed058661bf2700.png"
import img5 from "../../Images/0f96125a3995a70c044e97f774ed058661bf2700.png"


const HeroSection = () => {



  return (
   <>
    <section className="hero">
      <div className="hero-text">
        <h1>Empowering Traders with <br /> Precision & Performance,<br /> Anywhere</h1>
        <p>
          Experience a next-gen trading platform built for speed, clarity, and control.
          <span className="highlight"> Optimize your trades, analyze insights, and make smarter moves </span>
          —whether you're a beginner or a pro.
        </p>
        <div className="email-box">
          <input type="email" placeholder="Enter Your Email Address" />
          <button>Start your free trial</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={dashboard} alt="Trading Platform" />
      </div>
    </section>

    {/* <section  className="All-company-show">
      <div>
        <h2>Broken Integrated</h2>
      </div>
      <div  className="all-company-img">
        <img src={img1} alt="" /><img src={img3} alt="" /><img src={img4} alt="" /><img src={img5} alt="" /><img src={img5} alt="" />
      </div>
    </section> */}
   </>
  );
};

export default HeroSection;
