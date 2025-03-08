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
import '../../Style/Services-CSS/ServicesCom2.css';
import RecognitionCard from './ServicesCom3';

const AboutC9 = () => {
  const recognitionData = [
    {
      image: ImageCard1,
      title: 'Diwali Collection',
      description: 'Make your Diwali celebrations even more special with our exquisite flower decorations. We provide vibrant and creative floral designs to illuminate your space with festive charm and joy.',
    },
    {
      image: ImageCard2,
      title: 'Father Day',
      description: 'Celebrate Father’s Day with our bespoke floral arrangements. Our designs add a touch of elegance and warmth, creating the perfect ambiance to honor your loved ones.',
    },
    {
      image: ImageCard3,
      title: 'Mother Day',
      description: 'Express love and gratitude on Mother’s Day with our beautiful flower decorations. We create thoughtful and heartwarming floral designs to make the day unforgettable.',
    },
    {
      image: ImageCard4,
      title: 'Christmas Day',
      description: 'Bring the magic of Christmas to life with our creative flower decorations. Our festive designs transform any space into a winter wonderland.',
    },
    {
      image: ImageCard5,
      title: 'Anniversary Flower',
      description: 'Celebrate anniversaries with our romantic and elegant flower arrangements. We design bespoke floral displays that add a special touch to your celebrations.',
    },
    {
      image: ImageCard6,
      title: 'Valentine Day',
      description: 'Add romance to Valentine’s Day with our stunning floral decorations. We create the perfect setting with beautiful flowers and creative designs.',
    },
    {
      image: ImageCard7,
      title: 'Love',
      description: 'Our floral designs convey love and affection through elegant arrangements. Perfect for any occasion where you want to express your heartfelt emotions.',
    },
    {
      image: ImageCard8,
      title: 'Ganesh Chaturthi Puja',
      description: 'Enhance your Ganesh Chaturthi celebrations with our divine floral decorations. We offer traditional and vibrant designs for a sacred ambiance.',
    },
    {
      image: ImageCard9,
      title: 'Saraswati Puja',
      description: 'Our flower decorations for Saraswati Puja reflect purity and devotion. We provide beautifully crafted floral designs that complement the spiritual setting.',
    },
    {
      image: ImageCard10,
      title: 'Raksha Bandhan',
      description: 'Create a welcoming and festive environment for Raksha Bandhan with our colorful and artistic flower decorations. Celebrate the bond of love with our creative designs.',
    },
  ];

  return (
    <div id='Awards-section' className="awards-recognition">
      <h1 className="text_About_C9">All Services</h1>
      <div className="awards-recognition__grid">
        {recognitionData.map((item, index) => (
          <RecognitionCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default AboutC9;
