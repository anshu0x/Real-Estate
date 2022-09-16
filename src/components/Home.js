import React, { useState } from "react";
import "../style/Home.css";
import Card from "./Card";
import { propertyData } from "./Real-estate-data";
import Select from "react-select";

function Home() {
  const priceLabel = [
    { value: "low", label: "$200-$1000" },
    { value: "average", label: "$1000-$3000" },
    { value: "high", label: "$3000-$8000" },
  ];
  const propertyType = [
    { value: "house", label: "House" },
    { value: "apartment", label: "Apartment" },
    { value: "bungalow", label: "Bungalow" },
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
  const [value, setValue] = useState("");

  const submitFilter = () => {
    const updatedItem = propertyData.filter((curelem) => {
      if (curelem.type === PropertyOpt) {
        return curelem.type === PropertyOpt;
      } else if (curelem.label === selectedOption) {
        return curelem.label === selectedOption;
      } else if (curelem.location === location) {
        return curelem.location === location;
      }
    });
    setPropertData(updatedItem);
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };
  return (
    <main>
      <section className="search-properties">
        <h1>Search properties to rent</h1>
        <form
          id="search-form"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            onKeyDown={handleInput}
            type="text"
            placeholder="Search With Search Bar"
          />
          <button id="submitbutton" type="submit" disabled>
            Search
          </button>
        </form>
      </section>
      <form
        className="filter-data"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Location
          <Select
            options={locationOpt}
            isSearchable={false}
            onChange={(e) => {
              setLocation(e.value);
            }}
          />
        </label>
        <label>
          Price
          <Select
            options={priceLabel}
            isSearchable={false}
            onChange={(e) => {
              setSelectedOption(e.value);
            }}
          />
        </label>
        <label>
          Property Type
          <Select
            options={propertyType}
            isSearchable={false}
            onChange={(e) => {
              setPropertyOpt(e.value);
            }}
          />
        </label>
        <label>
          Search
          <button onClick={submitFilter} id="submitbutton" type="submit">
            Search
          </button>
        </label>
      </form>
      <div className="search-result">
        {propertData
          .filter((data) => {
            const { title, address } = data;
            if (
              title.toLowerCase().includes(value.toLowerCase()) ||
              address.toLowerCase().includes(value.toLowerCase())
            ) {
              return data;
            }
          })
          .map((data) => (
            <Card
              key={data.price}
              className="result-card"
              title={data.title}
              image={data.image}
              price={data.price}
              address={data.address}
            />
          ))}
      </div>
    </main>
  );
}

export default Home;

