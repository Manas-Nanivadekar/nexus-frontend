import React from "react";
import axios from "axios";

import "../../styles/nexus.css";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/v1/";

function ConfirmationFrom() {
  const [destCountryId, setDestCountryId] = React.useState();
  const [destBankId, setDestBankId] = React.useState();
  const [destBankAccNumber, setDestBankAccNumber] = React.useState();

  const confirmTo = () => {
    axios
      .post(`${URL}confirmto`, {
        destination_country_id: destCountryId,
        destination_bank_identifier: destBankId,
        destination_bank_account_number: destBankAccNumber,
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
              setDestCountryId(e.target.value);
            }}
          />
          <label> Destination Country ID</label>
          <input
            type="text"
            onChange={(e) => {
              setDestBankId(e.target.value);
            }}
          />
          <label>Destination Bank ID</label>
          <input
            type="text"
            onChange={(e) => {
              setDestBankAccNumber(e.target.value);
            }}
          />
          <label>Destination Bank Number</label>
        </div>
        <button onClick={confirmTo} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ConfirmationFrom;
