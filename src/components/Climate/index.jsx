import React, { useState } from "react";
import "./style.css";
import temp from "./images/temp.svg";

export const Climate = ({ temperature, humidity }) => {
  const [teplota, setTeplota] = useState(temperature);

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={temp} />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{teplota}&deg;C</div>
        <div className="climate__humidity">{humidity}&nbsp;%</div>
      </div>
      <div className="climate__controls">
        <button className="button" onClick={() => setTeplota(teplota + 1)}>
          +
        </button>
        <button className="button" onClick={() => setTeplota(teplota - 1)}>
          -
        </button>
      </div>
    </div>
  );
};
