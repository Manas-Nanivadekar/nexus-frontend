import React from "react";
import { Link } from "react-router-dom";

function Sld() {
  const style = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div>
      <Link style={style} to="/sld/set">
        <h1> Set SLD Info </h1>
      </Link>
      <h2> Or </h2>
      <Link style={style} to="/sld/get">
        <h1> Get SLD Info </h1>
      </Link>
    </div>
  );
}

export default Sld;
