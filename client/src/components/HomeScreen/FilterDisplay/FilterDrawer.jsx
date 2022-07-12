import React from "react";
import FilterMenu from "./FilterMenu";
import "../../../style/Drawer.css";
export default function FilterDrawer({ isOpen }) {
  return (
    <div
      className={`Drawer-container ${isOpen ? "Drawer-container--isOpen" : ""}`}
    >
      <FilterMenu />
    </div>
  );
}
