import React from "react";
import { Link } from "react-router-dom";

function Final() {
  const style = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div>
      <Link style={style} to="/final/set">
        <h1> Set Payment Details </h1>
      </Link>
      <h3> ***Source Bank to Dest Bank*** </h3>
    </div>
  );
}

export default Final;
