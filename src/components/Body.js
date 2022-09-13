import React from "react";
import "../style/Body.css";
import CardDemo from "./Cards";
// import Card from "./Card";
import { propertyData } from "./Real-estate-data";

function Body() {
  return (
    <div className="body">
      <div className="body-search">
        <h1>Search properties to rent</h1>
      </div>
      <div className="body-result">
        {propertyData.map((data) => (
          <CardDemo
            className="result-card"
            title={data.title}
            image={data.image}
            price={data.price}
            address={data.address}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
