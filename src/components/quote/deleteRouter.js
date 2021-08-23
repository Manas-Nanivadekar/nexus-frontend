import React from "react";
import axios from "axios";

import "../../styles/nexus.css";

const URL = process.env.REACT_APP_BASE_URL || "http://65.2.142.130:5000/v1/";

const DeleteQuote = () => {
  const [uuid, setUuid] = React.useState("");
  const [sourceCurrency, setSourceCurrency] = React.useState("");
  const [destinationCurrency, setDestinationCurrency] = React.useState("");

  const [data, setData] = React.useState();
  const [fetched, setFetched] = React.useState(false);

  const deletation = async () => {
    const axiosInfo = await axios.delete(
      `${URL}quote?source_currency=${sourceCurrency}&destination_currency=${destinationCurrency}`,
      {
        uuid: uuid,
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
            <label>Uuid</label>
            <input
              type="text"
              onChange={(e) => {
                setUuid(e.target.value);
              }}
            />
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
        {console.log(data)}
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
          {data.data.message}
        </p>
      </div>
    );
  }
};

export default DeleteQuote;
