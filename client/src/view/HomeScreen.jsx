import React from "react";
import CardGrid from "../components/HomeScreen/CardsDisplay/CardGrid";
import FilterScreen from "../components/HomeScreen/FilterDisplay/FilterScreen";
import "../style/Home.css";

function HomeScreen() {
  return (
    <div className="Home-page">
      <div className="Home-Image">
        <img
          src="https://dkf1c7yctpv3v.cloudfront.net/v2.jpg"
          alt="#"
          width="100%"
          height="600px"
        />
      </div>
      <div className="Home-style">
        <div className="Home-grid">
          <CardGrid />
        </div>
        <div className="Home-filter">
          <FilterScreen />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
