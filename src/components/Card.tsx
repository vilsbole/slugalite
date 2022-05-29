import React from "react";

export const Card = ({ data: d }) => {
  return (
    <div style={{ marginBottom: "1em" }}>
      <ul>
        <li>{d.name}</li>
        <li>{d.rarity}</li>
        <li>{d.position}</li>
        <li>{d.age}</li>
        <li>{d.player.country.code}</li>
      </ul>
    </div>
  );
};
