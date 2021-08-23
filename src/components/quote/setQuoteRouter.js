import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../styles/nexus.css";

const URL = process.env.REACT_APP_BASE_URL || "http://65.2.142.130:5000/v1/";

const SetQuoteRouter = () => {
  const [sourceLp, setSourceLp] = React.useState("");
  const [destLp, setDestLp] = React.useState("");
  const [rate, setRate] = React.useState("");
  const [publicAvail, setPublicAvail] = React.useState("");
  const [sourceBankId, setBankId] = React.useState("");
  const [sourceCurrency, setSourceCurrency] = React.useState("");
  const [destinationCurrency, setDestinationCurrency] = React.useState("");

  const [data, setData] = React.useState();
  const [fetched, setFetched] = React.useState(false);

  const style = {
    color: "black",
    textDecoration: "none",
  };

  const deletation = async () => {
    const axiosInfo = await axios.post(
      `${URL}quote?source_currency=${sourceCurrency}&destination_currency=${destinationCurrency}`,
      {
        source_lp: sourceLp,
        destination_lp: destLp,
        rate: rate,
        public: publicAvail,
        source_bank_id: sourceBankId,
      }
    );
    await setData(axiosInfo);
    await setFetched(true);
  };

  if (fetched === false) {
    return (
      <div className="container">
        <div className="brand-title">
          <div className="inputs">
            <label>Source Currency</label>
            <input
              onChange={(e) => {
                setSourceCurrency(e.target.value);
              }}
              type="text"
            />
            <label>Destination Currency</label>
            <input
              onChange={(e) => {
                setDestinationCurrency(e.target.value);
              }}
              type="text"
            />
            <label>Source Lp</label>
            <input
              onChange={(e) => {
                setSourceLp(e.target.value);
              }}
              type="text"
            />
            <label> Destination LP </label>
            <input
              onChange={(e) => {
                setDestLp(e.target.value);
              }}
              type="text"
            />
            <label> Set Rate </label>
            <input
              onChange={(e) => {
                setRate(e.target.value);
              }}
              type="text"
            />
            <label> Is Public Available </label>
            <input
              onChange={(e) => {
                setPublicAvail(e.target.value);
              }}
              type="text"
            />
            <label> Bank Id </label>
            <input
              onChange={(e) => {
                setBankId(e.target.value);
              }}
              type="text"
            />
          </div>
          <button onClick={deletation} type="submit">
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
          {`${data.data.message}`}
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
          {` Exchange Provider UUID = ${data.data.fxp_uuid}`}
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
          {` Quote UUID =  ${data.data.quote_uuid}`}
        </p>

        <Link target="_blank" style={style} to="/quote/get">
          <h1> Get Rates </h1>
        </Link>
      </div>
    );
  }
};

export default SetQuoteRouter;
