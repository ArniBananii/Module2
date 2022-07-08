import React, { useContext, useState } from "react";
import { SearchParamContext } from "../../../context/SearchParamContext.jsx";

import FilterButton from "./Filter/FilterButton";
import { TypeButtons, RarityButtons } from "./Filter/FilterButtonsData";
export default function FilterScreen() {
  const { searchParams } = useContext(SearchParamContext);
  return (
    <div>
      {TypeButtons.map((button, index) => {
        return (
          <li>
            <FilterButton index={index} buttonData={button} />
          </li>
        );
      })}
      {RarityButtons.map((button, index) => {
        return (
          <li>
            <FilterButton index={index} buttonData={button} />
          </li>
        );
      })}
      <div>
        {searchParams.map((item, index) => {
          return (
            <p key={index} style={{ color: "white" }}>
              {item}{" "}
            </p>
          );
        })}
      </div>
    </div>
  );
}
