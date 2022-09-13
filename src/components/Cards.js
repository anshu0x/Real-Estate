import React from "react";
import "../style/Card.css";

function CardDemo({ image, title, price, address }) {
  return (
    <div className="card">
      <img src={image} alt="house" className="card-img" />
      <div className="card-details">
        <h3 className="card-price">
          {price}<span>/month</span>
        </h3>
        <h2 className="card-title"> {title} </h2>
        <p className="card-address"> {address} </p>
      </div>
    </div>
  );
}

export default CardDemo;
