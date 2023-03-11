import React, { useState } from "react";
import lightOff from "./images/light-off.svg";
import lightOn from "./images/light-on.svg";
import "./style.css";

export const Light = ({ name, state }) => {
  const [osvetleni, setOsvetleni] = useState(state);

  return (
    <div
      className="light"
      onClick={() => setOsvetleni(osvetleni === "on" ? "off" : "on")}
      key={name}
    >
      <div className="light__icon">
        <img src={osvetleni === "on" ? lightOn : lightOff} />
      </div>

      <div className="light__name">{name}</div>
    </div>
  );
};
