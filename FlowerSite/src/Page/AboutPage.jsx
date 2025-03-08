import React  from 'react';  
import '../Page/AboutPage.css';
import { motion } from "framer-motion";
import Comp1  from  '../Component/About-US/AboutCom1';
import Comp2 from '../Component/About-US/AboutCom2';
import Comp3 from '../Component/About-US/AboutCom4';


function About(){

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

return (
    <div className="AboutPage-content">
     <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp1 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp3 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp2 />
        </motion.div>

      
    </div>
  
)
}

export default About ;