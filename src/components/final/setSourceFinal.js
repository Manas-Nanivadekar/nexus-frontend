import React from "react";
import axios from "axios";

import "../../styles/nexus.css";
import { Link } from "react-router-dom";

const URL = process.env.REACT_APP_BASE_URL || "http://65.2.142.130:5000/v1/";

const style = {
  color: "black",
  textDecoration: "none",
};

function SetSourceFinal() {
  const [sourceBankId, setSourceBankId] = React.useState("");
  const [sourceBankAccNumber, setSourceBankAccNumber] = React.useState("");
  const [sourceBankAccAdd, setSourceBankAccAdd] = React.useState("");
  const [sourceBankAccDob, setSourceBankAccDob] = React.useState("");
  const [sourceBankAccDop, setSourceBankAccDop] = React.useState("");
  const [sourceBankAccNationId, setSourceBankAccNationId] = React.useState("");
  const [paymentId, setPaymentId] = React.useState("");

  const [data, setData] = React.useState();
  const [fetched, setFetched] = React.useState(false);

  const setSourceInfo = async () => {
    const axiosInfo = await axios.post(`${URL}finalsource`, {
      paymentId,
      sourceBankId,
      sourceBankAccNumber,
      sourceBankAccAdd,
      sourceBankAccDob,
      sourceBankAccDop,
      sourceBankAccNationId,
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
            <label>Source Bank ID</label>
            <input
              type="text"
              onChange={(e) => {
                setSourceBankId(e.target.value);
              }}
            />
            <label>Source Bank Account Number</label>
            <input
              type="text"
              onChange={(e) => {
                setSourceBankAccNumber(e.target.value);
              }}
            />
            <label>Source Bank Account Address</label>
            <input
              type="text"
              onChange={(e) => {
                setSourceBankAccAdd(e.target.value);
              }}
            />
            <label>Source Bank Account Date of Birth</label>
            <input
              type="text"
              onChange={(e) => {
                setSourceBankAccDob(e.target.value);
              }}
            />
            <label>Source Bank Account Date of Profile</label>
            <input
              type="text"
              onChange={(e) => {
                setSourceBankAccDop(e.target.value);
              }}
            />
            <label>Source Bank Account</label>
            <input
              type="text"
              onChange={(e) => {
                setSourceBankAccNationId(e.target.value);
              }}
            />
          </div>
          <button onClick={setSourceInfo} type="submit">
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

        <Link style={style} to="/final/dest" target="_blank">
          <h1>Set Destination Bank Data</h1>
        </Link>
      </div>
    );
  }
}

export default SetSourceFinal;
