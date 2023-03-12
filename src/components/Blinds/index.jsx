import React, { useState } from "react";
import "./style.css";
import blindsOpen from "./images/blinds-open.svg";
import blindsClosed from "./images/blinds-closed.svg";

export const Blinds = ({ state }) => {
  const [zaluzie, setZaluzie] = useState(state);

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={zaluzie === "open" ? blindsOpen : blindsClosed} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={zaluzie === "open" ? "button button--active" : "button"}
          onClick={() => setZaluzie("open")}
        >
          Otevřeno
        </button>

        <button
          className={zaluzie === "closed" ? "button button--active" : "button"}
          onClick={() => setZaluzie("closed")}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};
