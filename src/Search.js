import React from "react";

import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form className="search">
        <input
          className="form-control enter-city"
          type="text"
          placeholder="Enter city"
        />
      </form>
    </div>
  );
}
