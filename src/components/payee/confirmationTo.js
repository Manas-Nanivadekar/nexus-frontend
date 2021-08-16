import React from "react";
import axios from "axios";

import "../../styles/nexus.css";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/v1/";

function ConfirmationTo() {
  const [accName, setAccName] = React.useState();
  const [displayName, setDisplayName] = React.useState();

  const confirmTo = () => {
    axios
      .post(`${URL}confirmfrom`, {
        acc_name: accName,
        display_name: displayName,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <div className="brand-title">
        <div className="inputs">
          <label>Account Name</label>
          <input
            type="text"
            onChange={(e) => {
              setAccName(e.target.value);
            }}
          />
          <label>Display Name</label>
          <input
            type="text"
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
          />
        </div>
        <button onClick={confirmTo} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ConfirmationTo;
