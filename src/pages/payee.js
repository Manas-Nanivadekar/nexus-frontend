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
      <h2> Then </h2>
      <Link style={style} to="/payee/from">
        <h1> Step 2 Confirmation Of Payee </h1>
      </Link>
    </div>
  );
}

export default Payee;
