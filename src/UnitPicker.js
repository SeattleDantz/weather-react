import React from "react";

import "./UnitPicker.css";

export default function UnitPicker() {
  return (
    <div className="UnitPicker">
      <h3 className="farenheit">°F </h3>
      <h3 className="celsius c-unit-unpicked">°C</h3>
    </div>
  );
}
