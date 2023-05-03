import React from "react";
import { Tile } from "../tile/Tile";



/*
export const TileList = ({data}) => {
  
  return (
    <div>
      {data.map((item, index) => (
        <Tile key={index} item={item} />
      ))}
    </div>
  );
};

*/

/*

export const TileList = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Tile key={index} name={item.name} description={item.description} />
      ))}
    </div>
  );
};

*/

export const TileList = ({data}) => {
  
  return (
    <div>
      {data.map(({ name, ...description }, index) => (
        <Tile key={index} name={name} description={description} />
      ))}
    </div>
  );
};


/*
export const TileList = ({data}) => {
  
  return (
    <div>
      {data.map((item, index) => (
        <Tile key={index} item={item} description={item.description} />
      ))}
    </div>
  );
};
*/
