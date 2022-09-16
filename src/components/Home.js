import React, { useState } from "react";
import "../style/Home.css";
import Card from "./Card/Card";
import { propertyData } from "./data/propertyData";
import Select from "react-select";
import { BsCalendarDate } from "react-icons/bs";
import { addDays } from "date-fns";
import { Calendar } from "react-date-range";

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
    { value: "Miami", label: "Miami" },
    { value: "Florida", label: "Florida" },
  ];

  const [propertData, setPropertData] = useState(propertyData);
  const [selectedOption, setSelectedOption] = useState(priceLabel.value);
  const [PropertyOpt, setPropertyOpt] = useState(propertyType.value);
  const [location, setLocation] = useState(locationOpt.value);
  const [value, setValue] = useState("");
  const [isCalender, setisCalender] = useState(false);

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
    if (!!PropertyOpt || !!selectedOption || !!location) {
      setPropertData(updatedItem);
    }
  };
  const handleInput = (e) => {
    setValue(e.target.value);
  };
  const [mydate, setdate] = React.useState(null);
  const handleSelect = (e) => {
    setdate(e);
    setisCalender(!isCalender);
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
            onChange={handleInput}
            type="text"
            placeholder="Search With Search Bar"
          />

          <button
            onClick={() => setValue("")}
            id="submitbutton"
            type="submit"
            disabled
          >
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
          When
          {isCalender ? (
            <div className="date-picker">
              <Calendar date={new Date()} onChange={handleSelect} />
            </div>
          ) : (
            <p id="selectdate" onClick={() => setisCalender(!isCalender)}>
              {!mydate ? (
                <span> Date </span>
              ) : (
                <span>{mydate.toString().slice(0, 10)} </span>
              )}
              <span>
                <BsCalendarDate />
              </span>
            </p>
          )}
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
          <button
            disabled={false}
            onClick={submitFilter}
            id="submitbutton"
            type="submit"
          >
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
