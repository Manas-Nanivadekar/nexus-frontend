import React from "react";
import axios from "axios";

import "../../styles/nexus.css";
import { Link } from "react-router-dom";

const URL = process.env.REACT_APP_BASE_URL || "http://3.108.226.179:5000/v1/";

const style = {
  color: "black",
  textDecoration: "none",
};

const SetFinal = () => {
  const [settlementAmount, setSettlementAmount] = React.useState("");
  const [clearingSystemRef, setClearingSystemRef] = React.useState("");
  const [chargeBearer, setChargeBearer] = React.useState("");
  const [quoteUuid, setQuoteUuid] = React.useState("");
  const [ipSource, setIpSource] = React.useState("");

  const [data, setData] = React.useState();
  const [fetched, setFetched] = React.useState(false);

  const FinalSubmit = async () => {
    const axiosInfo = await axios.post(`${URL}final`, {
      settlementAmount,
      clearingSystemRef,
      chargeBearer,
      quoteUuid,
      ipSource,
    });
    await setData(axiosInfo);
    await setFetched(true);
  };

  if (fetched === false) {
    return (
      <div className="container">
        <div className="brand-title">
          <div className="inputs">
            <label>Settlement Amount</label>
            <input
              type="text"
              onChange={(e) => {
                setSettlementAmount(e.target.value);
              }}
            />
            <label>Clearing System Ref</label>
            <input
              type="text"
              onChange={(e) => {
                setClearingSystemRef(e.target.value);
              }}
            />
            <label>Charge Bearer</label>
            <input
              type="text"
              onChange={(e) => {
                setChargeBearer(e.target.value);
              }}
            />
            <label>Quote UUID</label>
            <input
              type="text"
              onChange={(e) => {
                setQuoteUuid(e.target.value);
              }}
            />
            <label>IP Source</label>
            <input
              type="text"
              onChange={(e) => {
                setIpSource(e.target.value);
              }}
            />
          </div>
          <button onClick={FinalSubmit} type="submit">
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

        <Link style={style} to="/final/source" target="_blank">
          <h1>Set the Source Bank data</h1>
        </Link>
      </div>
    );
  }
};

export default SetFinal;
