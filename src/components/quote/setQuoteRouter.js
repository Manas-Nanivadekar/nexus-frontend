import React from "react";
import axios from "axios";

import "../../styles/nexus.css";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/v1/";

const SetQuoteRouter = () => {
  const [sourceLp, setSourceLp] = React.useState("");
  const [destLp, setDestLp] = React.useState("");
  const [rate, setRate] = React.useState("");
  const [publicAvail, setPublicAvail] = React.useState(false);
  const [timestamp, setTimestamp] = React.useState(0);
  const [sourceBankId, setBankId] = React.useState("");
  const [sourceCurrency, setSourceCurrency] = React.useState("");
  const [destinationCurrency, setDestinationCurrency] = React.useState("");

  const deletation = () => {
    axios.post(
      `${URL}quote?cource_currency=${sourceCurrency}&destination_currency=${destinationCurrency}`,
      {
        source_lp: sourceLp,
        destination_lp: destLp,
        rate: rate,
        public: publicAvail,
        timestamp: timestamp,
        source_bank_id: sourceBankId,
      }
    );
  };

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
          <label>Source Lp</label>
          <input
            type="text"
            onChange={(e) => {
              setSourceLp(e.target.value);
            }}
          />
          <label> Destination LP </label>

          <input
            type="text"
            onChange={(e) => {
              setDestLp(e.target.value);
            }}
          />
          <label> Set Rate </label>
          <input
            type="text"
            onChange={(e) => {
              setRate(e.target.value);
            }}
          />
          <label> Is Public Available </label>
          <input
            type="text"
            onChange={(e) => {
              setPublicAvail(e.target.value);
            }}
          />
          <label> Time Stamp </label>
          <input
            type="text"
            onChange={(e) => {
              setTimestamp(e.target.value);
            }}
          />
          <label> Bank Id </label>
          <input
            type="text"
            onChange={(e) => {
              setBankId(e.target.value);
            }}
          />
        </div>
        <button onClick={deletation} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SetQuoteRouter;
