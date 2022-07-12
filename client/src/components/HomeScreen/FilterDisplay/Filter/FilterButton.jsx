import React, { useContext, useState } from "react";
import { SearchParamContext } from "../../../../context/SearchParamContext.jsx";
import "../../../../style/FilterButton.css";
export default function FilterButton(props) {
  const { buttonData, index } = props;
  const [secondPress, setSecondPress] = useState(false);
  const { searchParams, setSearchParams } = useContext(SearchParamContext);
  const [color, setColor] = useState("#1b1a1a");
  const [textColor, setTextColor] = useState("#FFFFFF");
  return (
    <button
      key={index}
      className={buttonData.cName}
      type={buttonData.type}
      value={buttonData.value}
      style={{ backgroundColor: color, color: textColor }}
      onClick={() => {
        if (!secondPress) {
          setSearchParams([...searchParams, buttonData.value]);
          searchParams.filter((item) => buttonData.value !== item);
          setSecondPress(true);
          setColor(buttonData.color);
        }
        if (secondPress) {
          setSearchParams(
            searchParams.filter((item) => buttonData.value !== item)
          );
          setColor("#1b1a1a");
          setTextColor("#FFFFFF");
          setSecondPress(false);
        }
      }}
    >
      {buttonData.title}
    </button>
  );
}
