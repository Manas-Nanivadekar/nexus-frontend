import React from "react";
import axios from "axios";

import "../../styles/nexus.css";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/v1/";

const SetFinal = () => {
  const [settlementAmount, setSettlementAmount] = React.useState("");
  const [clearingSystemRef, setClearingSystemRef] = React.useState("");
  const [chargeBearer, setChargeBearer] = React.useState("");
  const [quoteUuid, setQuoteUuid] = React.useState("");
  const [ipSource, setIpSource] = React.useState("");
  const [sourceBankId, setSourceBankId] = React.useState("");
  const [sourceBankAccNumber, setSourceBankAccNumber] = React.useState("");
  const [sourceBankAccAdd, setSourceBankAccAdd] = React.useState("");
  const [sourceBankAccDob, setSourceBankAccDob] = React.useState("");
  const [sourceBankAccDop, setSourceBankAccDop] = React.useState("");
  const [sourceBankAccNationId, setSourceBankAccNationId] = React.useState("");
  const [destBankId, setDestBankId] = React.useState("");
  const [destBankAccNumber, setDestBankAccNumber] = React.useState("");
  const [destBankAccAdd, setDestBankAccAdd] = React.useState("");
  const [destBankAccDob, setDestBankAccDob] = React.useState("");
  const [destBankAccDop, setDestBankAccDop] = React.useState("");
  const [destBankAccNationId, setDestBankAccNationId] = React.useState("");

  const FinalSubmit = () => {
    axios
      .post(`${URL}final`, {
        settlementAmount,
        clearingSystemRef,
        chargeBearer,
        quoteUuid,
        ipSource,
        sourceBankId,
        sourceBankAccNumber,
        sourceBankAccAdd,
        sourceBankAccDob,
        sourceBankAccDop,
        sourceBankAccNationId,
        destBankId,
        destBankAccNumber,
        destBankAccAdd,
        destBankAccDob,
        destBankAccDop,
        destBankAccNationId,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="container">
      <div className="brank-title">
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
        <button onClick={FinalSubmit} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default SetFinal;
