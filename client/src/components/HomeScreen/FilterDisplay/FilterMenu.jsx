import React, { useContext, useState } from "react";
import { SearchParamContext } from "../../../context/SearchParamContext.jsx";
import FilterButton from "./Filter/FilterButton";
import { TypeButtons, RarityButtons } from "./Filter/FilterButtonsData";
import "../../../style/FilterMenu.css";
export default function FilterMenu() {
  // const { searchParams } = useContext(SearchParamContext);
  return (
    <>
      <div className="Type-grid">
        {TypeButtons.map((button, index) => {
          return <FilterButton index={index} buttonData={button} />;
        })}
      </div>
      <div className="Rarity-grid">
        {RarityButtons.map((button, index) => {
          return <FilterButton index={index} buttonData={button} />;
        })}
      </div>
    </>
  );
}
