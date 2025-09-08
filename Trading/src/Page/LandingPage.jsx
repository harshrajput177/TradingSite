import { motion } from "framer-motion";
import Comp1 from "../Component/Landing/LandingCom1";
import Comp2 from "../Component/Landing/Landingcom2";
import Comp3 from "../Component/Landing/LandingCom3";
import Comp4 from "../Component/Landing/LandingCom4";
import "./Home.css"; // external CSS for styling

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="Component">
      <div className="HomeComponent">


          <Comp1 />

        <motion.div  variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp2  />
        </motion.div>
    
       <motion.div  variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp3 />
        </motion.div>
    
       <motion.div className="section-with-line" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp4 />
       </motion.div>
        
      </div>
    </div>
  );
};

export default Home;

