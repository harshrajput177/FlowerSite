import React from 'react';
import '../../Style/AboutUs-CSS/AboutCom4.css';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { motion } from 'framer-motion';

const statsData = [
  {
    icon: <HomeIcon className='AboutCom-4-icon' size={48} />, 
    count: '10K+', 
    label: 'Design Listed'
  },
  {
    icon: <PeopleAltIcon className='AboutCom-4-icon' size={48} />, 
    count: '50K+', 
    label: 'Customers World Wide'
  },
  {
    icon: <TagFacesIcon className='AboutCom-4-icon' size={48} />, 
    count: '30K+', 
    label: 'Happy Customers'
  }
];

const ImprovedFrontendStats = () => {
  return (
    <div className='stats-container'>
      {statsData.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div className='AboutCom-4-card'>
            <div className='AboutCom-4-card-content'>
              {stat.icon}
              <h2 className='AboutCom-4-count'>{stat.count}</h2>
              <p className='AboutCom-4-label'>{stat.label}</p>
              <p className='AboutCom-4-description'>
                We offer high-quality services with a focus on customer satisfaction and trust.
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ImprovedFrontendStats;