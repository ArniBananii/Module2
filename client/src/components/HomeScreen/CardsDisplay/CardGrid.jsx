import React from "react";
import useFetch from "../../../util/useFetch";
import { BASE_URL } from "../../../Constants/Local.js";
import Card from "./Card";
import "../../../style/CardGrid_style.css";

export default function CardGrid() {
  const { response, isLoading, error } = useFetch(`${BASE_URL}/cards`);

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
