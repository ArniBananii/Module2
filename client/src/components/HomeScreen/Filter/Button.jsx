import React from "react";

export default function Button(props) {
  const { type, name, width, height } = props;

  return (
    <button
      style={{ "border-radius": "8px", width: { width }, height: { height } }}
      type={type}
      onClick={{}}
    >
      {name}
    </button>
  );
}
