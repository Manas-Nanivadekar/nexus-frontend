import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "../../styles/nexus.css";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/v1/";

const style = {
  color: "black",
  textDecoration: "none",
};

const style_two = {
  color: "black",
};

const GetQuoteRouter = () => {
  const [data, setData] = React.useState();
  const [fetched, setFetched] = React.useState(false);
  const [quoteId, setQuoteId] = React.useState("");

  const [sourceCurrency, setSourceCurrency] = React.useState("");
  const [destinationCurrency, setDestinationCurrency] = React.useState("");

  const getQuote = async () => {
    const axiosInfo = await axios.get(
      `${URL}quote?source_currency=${sourceCurrency}&destination_currency=${destinationCurrency}`,
      {
        quote_id: quoteId,
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
            <p> *Please Copy the Quote UUID from previous page* </p>
            <label> Source Currency</label>
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
            <label> Quote Id</label>
            <input
              type="text"
              onChange={(e) => {
                setQuoteId(e.target.value);
              }}
            />
          </div>
          <button onClick={getQuote} type="submit">
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
        {console.log(data.data)}
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
        <div>
          <h3>
            {" "}
            If only currencies are showing then fork the API collection, and
            follow the below steps
          </h3>
          <h4> 1. Go to Quote Folder </h4>
          <h4> 2. Go to Get reqest </h4>
          <h4> 3. Change the Quote Id in body </h4>
          <h4> 4. You'll get the result </h4>
          <a
            style={style_two}
            href="https://god.gw.postman.com/run-collection/13139793-849e84d7-a40a-4ee2-9619-f21c11d46124?action=collection%2Ffork&collection-url=entityId%3D13139793-849e84d7-a40a-4ee2-9619-f21c11d46124%26entityType%3Dcollection%26workspaceId%3D044d6cac-9508-4fce-86cc-afa6d89f90a0"
          >
            Fork Collection
          </a>
        </div>
      </div>
    );
  }
};

export default GetQuoteRouter;
