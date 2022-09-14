import React, { useEffect, useState } from "react";
import "../style/Body.css";
import CardDemo from "./Cards";
// import Card from "./Card";
import { propertyData } from "./Real-estate-data";
import Select from "react-select";

function Body() {
  const priceLabel = [
    { value: "low", label: "$200-$1000" },
    { value: "average", label: "$1000-$3000" },
    { value: "high", label: "$3000-$8000" },
  ];
  const propertyType = [
    { value: "house", label: "house" },
    { value: "apartment", label: "apartment" },
    { value: "bungalow", label: "bungalow" },
  ];

  const locationOpt = [
    { value: "New York", label: "New York" },
    { value: "Canada", label: "Canada" },
    { value: "UAE", label: "UAE" },
    { value: "Chicago", label: "Chicago" },
  ];

  const [propertData, setPropertData] = useState(propertyData);
  const [selectedOption, setSelectedOption] = useState(priceLabel.value);
  const [PropertyOpt, setPropertyOpt] = useState(propertyType.value);
  const [location, setLocation] = useState(locationOpt.value);

  const filterLocation = (categItem) => {
    const updatedItem = propertyData.filter((curelem) => {
      return curelem.location === categItem;
    });
    setPropertData(updatedItem);
  };
  const filterItem = (categItem) => {
    const updatedItem = propertyData.filter((curelem) => {
      return curelem.label === categItem;
    });
    setPropertData(updatedItem);
  };
  const filerPropertType = (categItem) => {
    const updatedItem = propertyData.filter((curelem) => {
      return curelem.type === categItem;
    });
    setPropertData(updatedItem);
  };

  return (
    <div className="body">
      <div className="body-search">
        <h1>Search properties to rent</h1>
      </div>
      <form
        className="filter-data"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="filter-location">
          <label>Location</label>
          <Select
            options={locationOpt}
            isSearchable={false}
            onChange={(e) => {
              setLocation(e.value);
              filterLocation(e.value);
            }}
          />
        </div>
        <div className="filter-when">
          <label>When</label>
          <input type="date" placeholder="Select when to move" required />
        </div>
        <div className="filter-price">
          <label>Price</label>
          <Select
            options={priceLabel}
            isSearchable={false}
            onChange={(e) => {
              setSelectedOption(e.value);
              filterItem(e.value);
            }}
          />
        </div>
        <div className="filter-price">
          <label>Property Type</label>
          <Select
            options={propertyType}
            isSearchable={false}
            onChange={(e) => {
              setPropertyOpt(e.value);
              filerPropertType(e.value);
            }}
          />
        </div>
        <div className="filter-type">
          <label>Property Type</label>
          <select name="property" id="property">
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="bungalow">bungalow</option>
          </select>
        </div>
        <div className="filter-button">
          <button onClick={() => setPropertData(propertyData)}>
            Clear Filter
          </button>
        </div>
      </form>
      <div className="body-result">
        {propertData.map((data) => (
          <CardDemo
            key={data.price}
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
