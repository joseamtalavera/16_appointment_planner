import React from "react";

/*
export const Tile = ({item}) => {
  if (!item) {
    return null; // or any other fallback value or component
  }

  return (
    <div className="tile-container">
      {Object.values(item).map((value, index) =>
        index === 0 ? (
          <p key={index} className="tile tile-title">{value}</p>
        ) : (
          <p key={index} className="tile">{value}</p>
        )
      )}
    </div>
  );
};

*/

export const Tile = ({ name, description }) => {
  return (
    <div className="tile-container">
      <p className="tile tile-title">{name}</p>
      {Object.values(description).map((value, index) => (
        <p key={index} className="tile">{value}</p>
      ))}
    </div>
  );
};
