import React from "react";
import "../Style/HomeCom4.css";
import C1 from '../Image/WhatsApp Image 2025-03-01 at 12.45.04_21c4eec7.jpg';
import C2 from '../Image/WhatsApp Image 2025-03-01 at 12.45.06_f3d97a18.jpg';
import C3 from '../Image/WhatsApp Image 2025-03-01 at 12.45.07_eba0049a.jpg';
import C4 from '../Image/WhatsApp Image 2025-03-01 at 12.45.13_1c5d5a2d.jpg';
import C5 from '../Image/WhatsApp Image 2025-03-01 at 12.47.31_8b6abaa2.jpg';
import C6 from '../Image/IMG-20250301-WA0017.jpg';
import C7 from '../Image/IMG-20250301-WA0018.jpg';
import C8 from '../Image/IMG-20250301-WA0013.jpg';
import C9 from '../Image/WhatsApp Image 2025-03-01 at 12.45.07_47e29c70.jpg';
import C10 from '../Image/IMG-20250301-WA0016.jpg';
import C11 from '../Image/IMG-20250301-WA0014.jpg';


const HomeGallery = () => {
  const photoData = [
    { id: 1, image: C1, title: "Annual Day" },
    { id: 2, image: C2, title: "Annual Day" },
    { id: 3, image: C3, title: "Annual Day" },
    { id: 4, image: C4, title: "Annual Day" },
    { id: 5, image: C5, title: "Annual Day" },
    { id: 6, image: C6, title: "Annual Day" },
    { id: 7, image: C7, title: "Annual Day" },
    { id: 8, image: C8, title: "Annual Day" },
    { id: 9, image: C9, title: "Annual Day" },
    { id: 10, image: C10, title: "Annual Day" },
    { id: 11, image: C11, title: "Annual Day" },
  ];

  return (
    <div className="Home-photo-gallery-container">
      {/* Heading */}
      <h2>Gallery</h2>

      {/* Image Grid */}
      <div className="Home-photo-grid">
        {/* Wrapper for all images */}
        <div className="Home-photo-images">
          {photoData.map((item) => (
            <div key={item.id} className="Home-photo-card">
              <img src={item.image} alt={item.title} className="Home-photo-image" />
            </div>
          ))}
        </div>
      </div>
      <div className="gallery-button" ><button className="gallery-view-all-btn">View All</button></div>
    </div>
  );
};

export default HomeGallery;