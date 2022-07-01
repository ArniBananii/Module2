import React from "react";
import useFetch from "../../../util/useFetch";
import { BASE_URL } from "../../../Constants/Local.js";
import Card from "./Card";

export default function CardGrid() {
  const { response, isLoading, error } = useFetch(`${BASE_URL}/cards`);

  console.log("response", response);
  console.log("isLoading", isLoading);
  return (
    <div>
      TEST
      {
        <div>
          {!isLoading ? (
            response.cards.map((card, index) => {
              return (
                <div key={index}>
                  <Card value={card} />;
                </div>
              );
            })
          ) : (
            <p>..Loading..</p>
          )}
        </div>
      }
    </div>
  );
}
