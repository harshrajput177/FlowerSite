import React  from 'react';  
import '../Page/HomePage.css';
import { motion } from "framer-motion";
import Comp1  from  '../Component/Contact-US/ContactUs_1';
// import Comp2 from '../Component/HomeCom2';
// import Comp3 from '../Component/HomeCom3';
// import Comp4 from '../Component/HomeCom4';
// import Comp5 from '../Component/HomeCom5';

function Contact(){

  const fadeInUp = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

return (
    <div className="BlogPage-content">
     <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp1 />
        </motion.div>

        {/* <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp2 />
        </motion.div> */}

        {/* <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp3 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp4 />
        </motion.div>

        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Comp5 />
        </motion.div> */}
    </div>
  
)
}

export default Contact ;