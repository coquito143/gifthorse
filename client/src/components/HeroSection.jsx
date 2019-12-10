import React from 'react';
import Horse from '../images/horse.png'

import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
  "https://res.cloudinary.com/dcagc4c0j/image/upload/v1575906511/gifthorse-hero_fksju1.jpg",
  "https://images.unsplash.com/photo-1555686913-2e38a187c840",
  "https://images.unsplash.com/photo-1513796430146-c91cf8e4d65c",
  "https://images.unsplash.com/photo-1512055635308-35101da190ff",
];


export default function HeroSection() {

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      if (index === 3) {
        setIndex(0);
      } else {
        setIndex(prev => prev + 1);
      }
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <React.Fragment>
      <section id="hero-section">
        <div id="hero-horse">
          <img src={Horse} alt="hero-image" />
        </div>
        <div id="hero-text">
          <h1>Parent recommended toys</h1>
          <h2 id="hero-text-h2">Helping you sift through the best gifts</h2>
        </div>
        <div id="gallery-div">
          <Gallery
            style={{
              height: "400px",
              width: "100%",
              margin: 0
          
              // width: "100%",
              // height: "350px"
              // border-radius: 150px 0 0 0,
            }}
            index={index}
            onRequestChange={i => {
              setIndex(i);
            }}
          >
            {images.map(image => (
              <GalleryImage margin-right="0" objectFit="cover" key={image} src={image} />
            ))}
          </Gallery>
          {/* <img id="hero-pic" src="https://res.cloudinary.com/dcagc4c0j/image/upload/v1575906511/gifthorse-hero_fksju1.jpg" /> */}
        </div>
      </section >
      <div id="green-border"></div>
    </React.Fragment>
  )
}