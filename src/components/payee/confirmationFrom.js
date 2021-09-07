import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import "../../styles/nexus.css";

const URL = process.env.REACT_APP_BASE_URL || "http://3.108.226.179:5000/v1/";

const style = {
  color: "black",
  textDecoration: "none",
};

function ConfirmationFrom() {
  const [destCountryId, setDestCountryId] = React.useState();
  const [destBankId, setDestBankId] = React.useState();
  const [destBankAccNumber, setDestBankAccNumber] = React.useState();

  const [data, setData] = React.useState();
  const [fetched, setFetched] = React.useState(false);

  const confirmTo = async () => {
    const axiosInfo = await axios.post(`${URL}confirmto`, {
      destination_country_id: destCountryId,
      destination_bank_identifier: destBankId,
      destination_bank_account_number: destBankAccNumber,
    });
    await setData(axiosInfo);
    await setFetched(true);
  };

  if (fetched === false) {
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
  } else {
    return (
      <div
        style={{
          margin: "40px 0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "3rem",
          borderRadius: "30px",
          backgroundColor: "#ffffff",
          boxShadow: "0 8px 8px -4px lightblue",
        }}
      >
        <Link style={style} to="/">
          <h1> Go to Home Page </h1>
        </Link>
        <p
          style={{
            display: "flex",
            backgroundColor: "#F6C6EA",
            padding: "1rem",
            borderRadius: "0.6rem",
            margin: "12px 0",
            color: "#334257",
            fontWeight: 700,
            boxShadow: "0 4px 4px -4px gray",
            fontSize: "1rem",
          }}
        >
          {data.data.hash}
        </p>

        <p
          style={{
            display: "flex",
            backgroundColor: "#F6C6EA",
            padding: "1rem",
            borderRadius: "0.6rem",
            margin: "12px 0",
            color: "#334257",
            fontWeight: 700,
            boxShadow: "0 4px 4px -4px gray",
            fontSize: "1rem",
          }}
        >
          Please Ignore '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY'
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            margin: "3rem",
          }}
        >
          {data.data.event.map((item) => {
            return (
              <p
                style={{
                  width: "120px",
                  height: "60px",
                  backgroundColor: "#F6C6EA",
                  padding: "1rem 0",
                  justifyContent: "center",
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "0.6rem",
                  margin: "20px",
                  color: "#334257",
                  boxShadow: "0 4px 4px -4px gray",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                {`${item}`}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ConfirmationFrom;
