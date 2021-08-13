import React from "react";
import axios from "axios";

import "../../styles/nexus.css";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/v1/";

const DeleteQuote = () => {
  const [uuid, setUuid] = React.useState("");

  const deletation = () => {
    axios.delete(`${URL}sld?country_id=us`, {
      uuid: uuid,
    });
  };

  <div className="container">
    <div className="brand-title">
      <div className="inputs">
        <input
          type="text"
          onChange={(e) => {
            setUuid(e.target.value);
          }}
        />
        <label>UUid</label>
      </div>
      <button onClick={deletation} type="submit">
        Submit
      </button>
    </div>
  </div>;
};

export default DeleteQuote;
