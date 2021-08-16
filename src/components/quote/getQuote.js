import React from "react";
import axios from "axios";

import "../../styles/nexus.css";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/v1/";

const GetQuoteRouter = () => {
  const getQuote = () => {
    axios.get(
      `${URL}quote?source_currency=${sourceCurrency}&destination_currency=${destinationCurrency}`
    );
  };

  const [sourceCurrency, setSourceCurrency] = React.useState("");
  const [destinationCurrency, setDestinationCurrency] = React.useState("");

  return (
    <div className="container">
      <div className="brand-title">
        <div className="inputs">
          <label>Source Currency</label>
          <input
            type="text"
            onChange={(e) => {
              setSourceCurrency(e.target.value);
            }}
          />
          <label>Destination Currency</label>
          <input
            type="text"
            onChange={(e) => {
              setDestinationCurrency(e.target.value);
            }}
          />
        </div>
        <button onClick={getQuote} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default GetQuoteRouter;
