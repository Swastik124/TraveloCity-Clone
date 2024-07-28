import React, { useEffect, useState } from "react";
import "./DestinationDetails.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import dbdata from "../../../db.json";
import SidePanel from "./SidePanel";
import CardPanel from "./CardPanel";

function DestinationDetails() {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(200);
  const [data, setData] = useState([]);
  const [compareproperties, setcompareproperties] = useState(false);

  useEffect(() => {
    setData(dbdata.hotels);
  }, []);

  const rangeSlider = (e) => {
    setMinPrice(e[0]);
    setMaxPrice(e[1]);
    const filteredData = dbdata.hotels.filter(
      (hotel) => hotel.price >= e[0] && hotel.price <= e[1]
    );
    setData(filteredData);
  };

  const priceChangeMin = (e) => {
    setMinPrice(e.target.value);
    const filteredData = dbdata.hotels.filter(
      (hotel) => hotel.price >= e.target.value && hotel.price <= maxPrice
    );
    setData(filteredData);
  };
  const priceChangeMax = (e) => {
    setMaxPrice(e.target.value);
    const filteredData = dbdata.hotels.filter(
      (hotel) => hotel.price >= minPrice && hotel.price <= e.target.value
    );
    setData(filteredData);
  };
  const searchHotel = (e) => {
    const filteredData = dbdata.hotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().slice(0, e.target.value.length) ===
        e.target.value
    );
    setData(filteredData);
  };

  const stardata = (rating) => {
    const maxrating = rating + 0.9;
    const filteredData = dbdata.hotels.filter(
      (e) => e.rating >= rating && e.rating <= maxrating
    );
    setData(filteredData);
  };

  const propertyHandle = (property) => {
    if (property === "hotel") {
      const filteredData = dbdata.hotels.filter((e) => {
        const namesplitarray = e.name.split(" ");
        console.log(namesplitarray);
        const lowercasenames = namesplitarray.map((e) => e.toLowerCase());
        const findHotel = lowercasenames.find((e) => e === property);
        if (findHotel) {
          return e;
        }
      });
      setData(filteredData);
    } else {
      const filteredData = dbdata.hotels.filter((e) => {
        const namesplitarray = e.name.split(" ");
        const lowercasenames = namesplitarray.map((e) => e.toLowerCase());

        const findHotel = lowercasenames.find((e) => e === "hotel");
        if (!findHotel) {
          return e;
        }
      });
      setData(filteredData);
    }
  };

  return (
    <>
      <div className="Dd1">
        <SidePanel
          searchHotel={searchHotel}
          minPrice={minPrice}
          priceChangeMin={priceChangeMin}
          priceChangeMax={priceChangeMax}
          maxPrice={maxPrice}
          rangeSlider={rangeSlider}
          stardata={stardata}
          setcompareproperties={setcompareproperties}
          compareproperties={compareproperties}
          propertyHandle={propertyHandle}
        />

        <CardPanel 
        data={data} 
        compareproperties={compareproperties} 
        />
      </div>
    </>
  );
}

export default DestinationDetails;