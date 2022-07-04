import React from "react";
import CardGrid from "../components/HomeScreen/CardsDisplay/CardGrid";
import SignUp from "../components/ProfileScreen/SignUp";

function HomeScreen() {
  return (
    <div style={{ display: "flex", "justify-content": "center" }}>
      <CardGrid />
    </div>
  );
}

export default HomeScreen;
