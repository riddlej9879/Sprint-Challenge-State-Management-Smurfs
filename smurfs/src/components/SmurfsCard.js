import React from "react";
import RemoveSmurf from "./RemoveSmurf";
// import EditSmurf from "./EditSmurf";

const SmurfsCard = ({ name, age, height, id }) => {
  return (
    <div className="smurf-card">
      <h2>{name}</h2>
      <h3>{age} years old</h3>
      <h3>{height}</h3>
      {/* <EditSmurf /> */}
      <RemoveSmurf id={id} />
    </div>
  );
};

export default SmurfsCard;
