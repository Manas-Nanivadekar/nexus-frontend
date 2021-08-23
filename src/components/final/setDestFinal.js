import React from "react";
import axios from "axios";

import "../../styles/nexus.css";
import { Link } from "react-router-dom";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/v1/";

const style = {
  color: "black",
  textDecoration: "none",
};

function SetDestFinal() {
  const [destBankId, setDestBankId] = React.useState("");
  const [destBankAccNumber, setDestBankAccNumber] = React.useState("");
  const [destBankAccAdd, setDestBankAccAdd] = React.useState("");
  const [destBankAccDob, setDestBankAccDob] = React.useState("");
  const [destBankAccDop, setDestBankAccDop] = React.useState("");
  const [destBankAccNationId, setDestBankAccNationId] = React.useState("");
  const [paymentId, setPaymentId] = React.useState("");

  const [data, setData] = React.useState();
  const [fetched, setFetched] = React.useState(false);

  const destSubmit = async () => {
    const axiosInfo = await axios.post(`${URL}finaldest`, {
      paymentId,
      destBankId,
      destBankAccNumber,
      destBankAccAdd,
      destBankAccDob,
      destBankAccDop,
      destBankAccNationId,
    });

    await setData(axiosInfo);
    await setFetched(true);
  };

  if (fetched === false) {
    return (
      <div className="container">
        <div className="brand-title">
          <div className="inputs">
            <p> *Please copy payment UUID from previous page* </p>
            <label>Payment Id UUID</label>
            <input
              type="text"
              onChange={(e) => {
                setPaymentId(e.target.value);
              }}
            />
            <label>Destination Bank ID</label>
            <input
              type="text"
              onChange={(e) => {
                setDestBankId(e.target.value);
              }}
            />
            <label>Destination Bank Account Number</label>
            <input
              type="text"
              onChange={(e) => {
                setDestBankAccNumber(e.target.value);
              }}
            />
            <label>Destination Bank Account Address</label>
            <input
              type="text"
              onChange={(e) => {
                setDestBankAccAdd(e.target.value);
              }}
            />
            <label>Destination Bank Account Date of Birth</label>
            <input
              type="text"
              onChange={(e) => {
                setDestBankAccDob(e.target.value);
              }}
            />
            <label>Destination Bank Account Date of Profile</label>
            <input
              type="text"
              onChange={(e) => {
                setDestBankAccDop(e.target.value);
              }}
            />
            <label>Destination Bank Account</label>
            <input
              type="text"
              onChange={(e) => {
                setDestBankAccNationId(e.target.value);
              }}
            />
          </div>
          <button onClick={destSubmit} type="submit">
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
          {data.data.paymentId}
        </p>

        {console.log(data)}

        <Link style={style} to="/final/get" target="_blank">
          <h1>Get Payment Data</h1>
        </Link>
      </div>
    );
  }
}

export default SetDestFinal;
