import React from "react";
import { Link } from "react-router-dom";

function Payee() {
  const style = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div>
      <Link style={style} to="/payee/to">
        <h1> Step 1 Confirmation on Behalf of Destination Bank </h1>
      </Link>
      <h3> ***Subprocess that needs to be done by Nexus*** </h3>
      <h4> ***For test purpose this needs to be done manually*** </h4>
    </div>
  );
}

export default Payee;
