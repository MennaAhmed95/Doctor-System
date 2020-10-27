import React from "react";
const DoctorCard = ({ src, name, text }) => {
  return (
    <div className="card">
      <img src={src} alt="doctor" />
      <h2>{name}</h2>
      <h5>{text}</h5>
    </div>
  );
};

export default DoctorCard;
