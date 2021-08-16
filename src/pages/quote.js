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
      <h2> Or </h2>
      <Link style={style} to="/quote/get">
        <h1> Get Rates </h1>
      </Link>
      <h2> Or </h2>
      <Link style={style} to="/quote/del">
        <h1> Delete Rates </h1>
      </Link>
    </div>
  );
}

export default Quote;
