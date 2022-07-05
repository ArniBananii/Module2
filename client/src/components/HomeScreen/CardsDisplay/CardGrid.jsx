import React, { useEffect } from "react";
import useFetch from "../../../util/useFetch";
import { BASE_URL } from "../../../Constants/Local.js";
import Card from "./Card";
import "../../../style/CardGrid_style.css";
import filterByOption from "../../../util/filterByOption";

export default function CardGrid() {
  const { response, isLoading, error } = useFetch(`${BASE_URL}/cards`);

  console.log("response", response);

  useEffect(() => {
    console.log("isLoading", isLoading);
    if (!isLoading) {
      console.log("test", filterByOption(response.cards, "Ether"));
    }
  }, [isLoading]);

  return (
    <div className="CardGrid">
      {!isLoading ? (
        response.cards.map((card, index) => {
          return <Card card={card} index={index} />;
        })
      ) : (
        <p>..Loading..</p>
      )}
    </div>
  );
}
