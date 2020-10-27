import React from "react";
import DoctorCard from "./Partiels/doctorCard";
import ManagerCard from "./Partiels/managerCard";
import { docCard } from "./Partiels/constant";
const DoctorSec = () => {
  return (
    <section className="doctors">
      <p className="text1">
        A flexible system to manage doctor´s professional practice.
        <br />
        Supports multiple times for a doctor
      </p>
      <h1 className="docsTitle">Book with The best Doctors</h1>
      <div className="cardsContainer">
        {docCard.map((item) => (
          <DoctorCard
            key={item.id}
            src={item.src}
            name={item.name}
            text={item.text}
          />
        ))}
      </div>
      <ManagerCard />
    </section>
  );
};

export default DoctorSec;
