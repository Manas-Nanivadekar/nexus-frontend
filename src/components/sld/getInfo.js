import React from "react";
import axios from "axios";

import "../../styles/nexus.css";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/v1/";

const GetInfo = () => {
  const [accountId, setAccountId] = React.useState("");

  const getSld = () => {
    axios
      .get(`${URL}sld?country_id=us`, {
        account_id: accountId,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <div className="brand-title">
        <div className="inputs">
          <input
            type="text"
            onChange={(e) => {
              setAccountId(e.target.value);
            }}
          />
          <label>Account ID</label>
        </div>
        <button onClick={getSld} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default GetInfo;
