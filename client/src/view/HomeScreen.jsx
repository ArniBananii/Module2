import React, { useState } from "react";
import CardGrid from "../components/HomeScreen/CardsDisplay/CardGrid";
import FilterDrawer from "../components/HomeScreen/FilterDisplay/FilterDrawer";
import FilterScreen from "../components/HomeScreen/FilterDisplay/FilterMenu.jsx";
import "../style/Home.css";

function HomeScreen() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  return (
    <>
      <button className="DrawerButton" onClick={toggleDrawer}>
        {isOpen ? "I'm open" : "I'm closed"}
      </button>
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
        </div>
      </div>

      <FilterDrawer isOpen={isOpen} />
    </>
  );
}

export default HomeScreen;
