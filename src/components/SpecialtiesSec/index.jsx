import React from "react";
import { speCard } from "./partials/constant";
import SpecialtyCard from "./partials/specialtyCard";
const SpecialtiesSec = () => {
  return (
    <section className="specialities">
      <h1 className="specTitle">Services That We Provide</h1>
      <img src="./imgs/c.png" alt="" />
      <p className="text1">
        We provide excellent services for your ultimate good health. Here some
        of the services are included for your better understand that we are
        always at your side.
      </p>
      <div className="specialistContainer">
        {speCard.map((item) => (
          <SpecialtyCard
            key={item.id}
            src={item.src}
            name={item.name}
            text={item.text}
          />
        ))}
      </div>
    </section>
  );
};

export default SpecialtiesSec;
