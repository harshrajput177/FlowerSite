import React from 'react';
import ImageCard1 from '../../Image/IMG-20250301-WA0013.jpg'; 
import ImageCard2 from '../../Image/ee77066ff7b93c49b879816b0b88567e.jpg'; 
import ImageCard3 from '../../Image/WhatsApp Image 2025-03-01 at 12.45.12_e8f6556b.jpg'; 
import ImageCard4 from '../../Image/IMG-20250301-WA0015.jpg'; 
import ImageCard5 from '../../Image/WhatsApp Image 2025-03-01 at 12.45.13_1c5d5a2d.jpg'; 
import ImageCard6 from '../../Image/IMG-20250301-WA0029.jpg'; 
import ImageCard7 from '../../Image/WhatsApp Image 2025-03-01 at 12.47.31_8b6abaa2.jpg'; 
import ImageCard8 from '../../Image/IMG-20250301-WA0011.jpg'; 
import ImageCard9 from '../../Image/a511aa328b584c5a14a21f11b030ded5.jpg'; 
import ImageCard10 from '../../Image/WhatsApp Image 2025-03-01 at 12.45.06_f3d97a18.jpg'; 
import '../../Style/Services-CSS/ServicesCom2.css'; // CSS for grid layout
import RecognitionCard from './ServicesCom3';

const AboutC9 = () => {
  const recognitionData = [
    {
      image: ImageCard1, // Corrected image reference
      title: 'Diwali Collection',
      description: 'The KBD Juniors team from Mount Litera Zee School emerged as National Champions in the Star Sports Pro Kabaddi Tournament, showcasing their unparalleled skill, teamwork, and determination. Competing on a national stage, the team demonstrated exceptional strategic gameplay and agility, earning them this prestigious title.',
     
    },
    {
      image: ImageCard2, // Use another image or same based as above
      title: 'Father Day',
      description: 'The Under-19 Boys team of Mount Litera Zee School emerged victorious in the CBSE Cluster tournament, displaying exceptional athletic skills and teamwork. Competing against strong opponents, the team exhibited unparalleled determination, strategic gameplay, and sportsmanship. This victory underscores the school’s dedication to nurturing young talent and providing a robust platform for students to shine in sports while balancing their academic pursuits.',
   
    },
    {
      image: ImageCard3, // Use another image or same based as above
      title: 'Mother Day',
      description: 'Students of Mount Litera Zee School displayed outstanding martial arts skills to emerge as winners at the Karate Championship hosted by The Royal Challengers. Their disciplined training, focus, and perseverance stood out, earning them the top spot in this prestigious competition.14. This achievement reflects the school’s emphasis on developing physical fitness, discipline, and sportsmanship,.',
  
    },
    {
      image: ImageCard4, // Use another image or same based as above
      title: 'crismistmas Day',
      description: 'The Entrepreneur Meet hosted by Mount Litera Zee School, Bihta was a landmark event that provided a unique platform for students to explore and develop entrepreneurial skills. With a focus on innovation and problem-solving, the event encouraged participants to present creative business ideas and strategies. This initiative not only inspired students to think outside the box but also instilled in them a sense of confidence and leadership, fostering a generation of future entrepreneurs and leaders.',
    },
    {
      image: ImageCard5, // Use another image or same based as above
      title: 'Anniversary Flower',
      description: 'Students of Mount Litera Zee School, Bihta displayed outstanding martial arts skills to emerge as winners at the Karate Championship hosted by The Royal Challengers. Their disciplined training, focus, and perseverance stood out, earning them the top spot in this prestigious competition. This achievement reflects the school’s emphasis on developing physical fitness, discipline, and sportsmanship, shaping students into resilient and determined individuals ready to take on challenges.',
    },
    {
      image: ImageCard6, // Use another image or same based as above
      title: 'valentine day',
      description: 'The Under-19 Boys team of Mount Litera Zee School, Bihta emerged victorious in the CBSE Cluster tournament, displaying exceptional athletic skills and teamwork. Competing against strong opponents, the team exhibited unparalleled determination, strategic gameplay, and sportsmanship. This victory underscores the school’s dedication to nurturing young talent and providing a robust platform for students to shine in sports while balancing their academic pursuits.',
    },
    {
      image: ImageCard7, // Use another image or same based as above
      title: 'Love',
      description: ' Mount Litera Zee School Bihta’s Kabaddi team earned the prestigious title of “KABADDI King” at the CBSE Cluster competition, solidifying their position as champions. Their outstanding performance, marked by agility, teamwork, and tactical brilliance, captivated the audience and left an indelible mark on the tournament. This achievement not only brought immense pride to the school but also reinforced its reputation for fostering excellence in sports and creating champions who excel on and off the field..',
    },
    {
      image: ImageCard8, // Use another image or same based as above
      title: 'ganesh chaturthi Puja',
      description: 'The girls’ team from Mount Litera Zee School showcased their strength and coordination to secure victory in the Tug of War event during the Annual Sports Meet. This win reflects the spirit of unity, perseverance, and determination among our students. Such achievements highlight the school’s commitment to promoting gender equality and empowering young girls to excel in every field, from academics to athletics, fostering confidence ',
    
    },
    {
      image: ImageCard9, // Use another image or same based as above
      title: 'saraswati puja ',
      description: 'The KBD Juniors team from Mount Litera Zee School, Bihta emerged as National Champions in the Star Sports Pro Kabaddi Tournament, showcasing their unparalleled skill, teamwork, and determination. Competing on a national stage, the team demonstrated exceptional strategic gameplay and agility, earning them this prestigious title. This victory not only brought immense pride to the school but also highlighted its emphasis on nurturing sports talent and fostering a winning mindset among students.',
  
    }, {
      image: ImageCard10, // Use another image or same based as above
      title: 'Raksha Bandhan ',
      description: 'Mount Litera Zee School proudly received a Memento of Participation at the CBSE Cluster Volleyball Tournament. This award recognizes the enthusiasm, teamwork, and dedication displayed by our students during the competition. Participating in this prestigious event provided students with an excellent opportunity to hone their skills, gain competitive exposure, and showcase their sportsmanship',
   
    },
   
  ];


  return (
    <div id='Awards-section' className="awards-recognition">
        <h1  className="text_About_C9">
       All Services
        </h1>
       {/* <div className="lines_C9">
        <div className="line_C9 black-line_C9"></div>
        <div className="line_C9 red-line_C9"></div>
      </div> */}
      <div className="awards-recognition__grid">
        {recognitionData.map((item, index) => (
          <RecognitionCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AboutC9;