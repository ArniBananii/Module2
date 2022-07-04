import React from "react";
import "../../../style/Card.css";

const cardTypeColors = {
  ETHER: "#718FDA",
  STOCK: "#E7CD49",
  SUMMONER: "#B449E7",
  LEVELS: "#85E749",
  INCANTATION: "#F45279",
  DOOR: "#CC6C14",
  CREATURE: "#FA4141",
};

export default function Card(props) {
  const { card, index } = props;

  console.log("card", card);
  console.log("indedx", index);

  return (
    <div className="Card-style">
      <img width="80px" height="120px" src={card.imageUrl}></img>

      <div className="Card-description">
        <div className="Card-type">
          {card.types.map((type, index) => {
            console.log("card.types", card.types.length);
            if (index < 1) {
              return (
                <span style={{ color: cardTypeColors[type.toUpperCase()] }}>
                  {type}
                </span>
              );
            } else {
              return (
                <span style={{ color: cardTypeColors[type.toUpperCase()] }}>
                  {" "}
                  / {type}
                </span>
              );
            }
          })}
        </div>
        <div className="Card-titel">{card.name} </div>
        {card.rank && <div className="Card-rank">{`Rank ${card.rank}`}</div>}
      </div>
      <div className="Card-info">
        <div className="Card-number">{card.cardNumber}</div>
        <div className="Card-rarity">{card.rarity}</div>
      </div>
    </div>
  );
}
