import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const style = {
    color: "black",
    textDecoration: "none",
  };

  const notes = {
    backgroundColor: "#ffffcc",
  };

  return (
    <div>
      <div style={notes}>
        <h2>
          {" "}
          Note! this frontend is just to show the API's working individually but
          after joining the dots, a full working Nexus will be available{" "}
        </h2>
      </div>

      <Link style={style} to="/sld">
        <h1> SLD </h1>
      </Link>
      <Link style={style} to="/quote">
        <h1> Quote </h1>
      </Link>
      <Link style={style} to="/payee">
        <h1> Payee Confirmation </h1>
      </Link>
      <Link style={style} to="/final">
        <h1> Payment </h1>
      </Link>
    </div>
  );
}

export default Home;
