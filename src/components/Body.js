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
      <div className="filter-data">
        <div className="filter-location">
          <label>Location</label>
          <h1>New York,USA</h1>
        </div>
        <div className="filter-when">
          <label>When</label>
          <input type="date" placeholder="Select " />
        </div>
        <div className="filter-price">
          <label>Price</label>
          <select name="price" id="price">
            <option value="less">$200-$1000</option>
            <option value="average">$1000-$3000</option>
            <option value="high">$3000-$8000</option>
          </select>
        </div>
        <div className="filter-button">
          <button className="btn">Search</button>
        </div>
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
