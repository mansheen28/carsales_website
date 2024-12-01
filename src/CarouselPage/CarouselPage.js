import React from "react";
import Slider from "react-slick";
import "../css/CarouselPage.css";
import car1 from "../Images/car1.jpg";
import car2 from "../Images/car2.jpg";
import car3 from "../Images/car3.jpg";
import car4 from "../Images/car4.jpg";
import car5 from "../Images/car5.jpg";
import car6 from "../Images/car6.jpg";
import car7 from "../Images/car7.jpg";
import car8 from "../Images/car8.jpg";
import car9 from "../Images/car9.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoad,
  faCar,
  faGasPump,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

// Example car data
const carData = [
  {
    image: car1,
    name: "2015 Mercedes-Benz",
    price: "$32,990",
    features: [
      { icon: faRoad, text: "152,000 Kms" },
      { icon: faCogs, text: "Automatic" },
      { icon: faCar, text: "4D Sedan" },
      { icon: faGasPump, text: "Petrol" },
    ],
  },
  {
    image: car2,
    name: "2001 Toyota Altezza",
    price: "$29,990",
    features: [
      { icon: faRoad, text: "167,000 Kms" },
      { icon: faCogs, text: "Manual" },
      { icon: faCar, text: "Sedan" },
      { icon: faGasPump, text: "Petrol" },
    ],
  },
  {
    image: car3,
    name: "2012 Toyota Mark",
    price: "$22,590",
    features: [
      { icon: faRoad, text: "168,000 Kms" },
      { icon: faCogs, text: "Automatic" },
      { icon: faCar, text: "Sedan" },
      { icon: faGasPump, text: "Petrol" },
    ],
  },
  {
    image: car4,
    name: "2007 Toyota Crown",
    price: "$23,500",
    features: [
      { icon: faRoad, text: "1,28305 Kms" },
      { icon: faCogs, text: "Automatic" },
      { icon: faCar, text: "Sedan" },
      { icon: faGasPump, text: "Petrol" },
    ],
  },
  {
    image: car5,
    name: "2000 Nissan Skyline",
    price: "$12,000,000",
    features: [
      { icon: faRoad, text: "97,000 Kms" },
      { icon: faCogs, text: "Manual" },
      { icon: faCar, text: "2 Coupe" },
      { icon: faGasPump, text: "Petrol" },
    ],
  },
  {
    image: car6,
    name: "2013 Toyota Prius",
    price: "$22,190",
    features: [
      { icon: faRoad, text: "65,000 Kms" },
      { icon: faCogs, text: "Automatic" },
      { icon: faCar, text: "Sedan" },
      { icon: faGasPump, text: "Electric" },
    ],
  },
  {
    image: car7,
    name: "2002 Toyota Crown",
    price: "$17,550",
    features: [
      { icon: faRoad, text: "159,397 Kms" },
      { icon: faCogs, text: "Automatic" },
      { icon: faCar, text: "Sedan" },
      { icon: faGasPump, text: "Petrol" },
    ],
  },
  {
    image: car8,
    name: "2005 Nissan Elgrand",
    price: "$13,500",
    features: [
      { icon: faRoad, text: "133,000 Kms" },
      { icon: faCogs, text: "Automatic" },
      { icon: faCar, text: "4D Wagon" },
      { icon: faGasPump, text: "Premium Ulp" },
    ],
  },
  {
    image: car9,
    name: "2018 Mazda 6",
    price: "$30,000",
    features: [
      { icon: faRoad, text: "52,387 Kms" },
      { icon: faCogs, text: "Automatic" },
      { icon: faCar, text: "Sedan" },
      { icon: faGasPump, text: "2.5L Petrol" },
    ],
  },
];

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
      aria-label="Previous"
    >
      &#8592;
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} custom-next-arrow`}
      onClick={onClick}
      aria-label="Next"
    >
      &#8594;
    </button>
  );
};

const CarouselPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className="carousel-container">
      <h2 className="title-section carousel-title">Let's Find Your Dream Car</h2>
      <p className="sub-section-title">Discover the latest and finest cars, all offered at a price that's friendly to your budget!</p>

      <Slider {...settings} className="carousel">
        {carData.map((car, index) => (
          <div className="carousel-item" key={index}>
            <div className="car-image-container">
              <img src={car.image} alt={car.name} className="car-image" />
            </div>
            <div className="car-details">
              <div className="car-name-price-container">
                <h3 className="car-name">{car.name}</h3>
                <p className="car-price">
                  {car.price}
                </p>
              </div>
              <ul className="car-features">
                {car.features.map((feature, idx) => (
                  <li key={idx}>
                    <FontAwesomeIcon
                      icon={feature.icon}
                      className="feature-icon"
                    />
                    {feature.text}
                  </li>
                ))}
              </ul>
              <span className="details-button">View Details →</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselPage;
