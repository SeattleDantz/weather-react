import React from "react";

import "./CurrentLocation.css";

export default function CurrentLocation() {
  return (
    <div className="CurrentLocation">
      <button
        type="button"
        className="current-loc-button btn btn-secondary"
        data-toggle="tooltip"
        data-placement="top"
        title="Current Location"
      >
        <i class="fas fa-location-arrow"></i>
      </button>
    </div>
  );
}
