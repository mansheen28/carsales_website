import React from "react";
import { useSpring, animated } from '@react-spring/web';
import SearchBox from "../SearchBox/SearchBox.js";
import "../css/Home.css";
import car from "../Images/car.png";

const ParentComponent = () => {
  // return (
  //   <div className="parent-container">
  //     <ImageWithText />
  //     <SearchBox />
  //   </div>
  // );
  const headerFade = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 }
  });

  const imageSlide = useSpring({
    transform: 'translateX(100%)',
    from: { transform: 'translateX(0%)' },
    reset: true,
    reverse: true,
    config: { tension: 150, friction: 40 }
  });
  return (
    <div className="home-container">
      <header className="home-header">
        <div className="header-text">
          <animated.h1 style={headerFade}>Find Your Perfect Ride with Trusted Used Cars</animated.h1>
        </div>
        <div className="header-image">
          <animated.img style={imageSlide} src={car} alt="Car" />
        </div>
      </header>
      <SearchBox className="search-box-outer" />
    </div>
  );
};

export default ParentComponent;
