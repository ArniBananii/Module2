import React, { useState } from "react";
import FilterButton from "./Filter/FilterButton";
import { TypeButtons } from "./Filter/FilterButtonsData";
export default function FilterScreen() {
  const [searchParams, setSearchParams] = useState([]);
  const [secondPress, setSecondPress] = useState(false);

  return (
    <div>
      {TypeButtons.map((button, index) => {
        return (
          <li>
            <FilterButton
              index={index}
              buttonData={button}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
            />
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
