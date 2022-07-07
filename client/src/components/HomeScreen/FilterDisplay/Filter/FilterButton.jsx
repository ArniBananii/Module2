import React, { useState } from "react";

export default function FilterButton(props) {
  const { searchParams, setSearchParams, buttonData, index } = props;
  const [secondPress, setSecondPress] = useState(false);
  const [color, setColor] = useState("#1b1a1a");
  return (
    <button
      key={index}
      className={buttonData.cName}
      type={buttonData.type}
      value={buttonData.value}
      style={{ color: color }}
      onClick={() => {
        if (!secondPress) {
          setSearchParams([...searchParams, buttonData.value]);
          searchParams.filter((item) => buttonData.value !== item);
          setSecondPress(true);
          setColor(buttonData.color);
          console.log("searchParams", searchParams);
        }
        if (secondPress) {
          setSearchParams(
            searchParams.filter((item) => buttonData.value !== item)
          );
          setColor("#1b1a1a");
          setSecondPress(false);
        }
      }}
    >
      {buttonData.title}
    </button>
  );
}
