import React, { useContext, useEffect } from "react";
import useFetch from "../../../util/useFetch";
import { BASE_URL } from "../../../Constants/Local.js";
import Card from "./Card";
import "../../../style/CardGrid_style.css";
import filterByOption from "../../../util/filterByOption";
import { SearchParamContext } from "../../../context/SearchParamContext";

export default function CardGrid() {
  const { searchParams } = useContext(SearchParamContext);

  const test3 = searchParams.join("&");
  console.log("test3", test3);
  const { response, isLoading, error } = useFetch(`${BASE_URL}/cards?${test3}`);

  console.log("response", response);

  useEffect(() => {}, []);

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
