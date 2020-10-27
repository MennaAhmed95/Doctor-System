import React from "react";
const SpecialtyCard = ({ src, name }) => {
  return (
    <div className="item">
      <div className="circle">
        <img src={src} alt="Specialty" />
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default SpecialtyCard;
