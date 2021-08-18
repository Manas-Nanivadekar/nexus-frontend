import React from "react";
import { Link } from "react-router-dom";

function Quote() {
  const style = {
    color: "black",
    textDecoration: "none",
  };

  return (
    <div>
      <Link style={style} to="/quote/set">
        <h1> Provide Rate </h1>
      </Link>
      <Link style={style} to="/quote/del">
        <h1> Delete Rates </h1>
      </Link>
    </div>
  );
}

export default Quote;
