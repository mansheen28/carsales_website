import React from "react";
import "../css/ThreeCardsComponent.css";

const cardData = [
  {
    icon: "fas fa-car",
    heading: "Exclusive Used Cars",
    text: "Explore our handpicked collection of premium cars and commercial vehicles. Each one passes rigorous workshop checks and road tests, ensuring only the highest quality rides make it to you.",
    buttonText: "Discover →",
  },
  {
    icon: "fas fa-check-circle",
    heading: "Seamless Compliance",
    text: "Let us handle your vehicle or bike compliance. Bespoke Inc. works with trusted compliance centers across Australia, ensuring a smooth and hassle-free approval process.",
    buttonText: "Learn More →",
  },
  {
    icon: "fas fa-briefcase",
    heading: "Expert Broker Services",
    text: "Don't risk a bad deal! Our expert brokers are here to guide you through the buying process, helping you avoid lemons and saving you from costly mistakes and delays.",
    buttonText: "Get In Touch →",
  },
];

const ThreeCardsComponent = () => {
  return (
    <div className="container">
      <h2 className="title-section">What We Offer You</h2>

      <div className="cards-container-offer">
        {cardData.map((card, index) => (
          <div className="card-offer" key={index}>
            <i className={`${card.icon}`}></i> 
            <h4>{card.heading}</h4>
            <p>{card.text}</p>
            <span>{card.buttonText}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeCardsComponent;
