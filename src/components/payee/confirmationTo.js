import React from "react";
import axios from "axios";

import "../../styles/nexus.css";
import { Link } from "react-router-dom";

const URL = process.env.REACT_APP_BASE_URL || "http://65.2.142.130:5000/v1/";

function ConfirmationTo() {
  const [accName, setAccName] = React.useState();
  const [displayName, setDisplayName] = React.useState();

  const [data, setData] = React.useState();
  const [fetched, setFetched] = React.useState(false);

  const style = {
    color: "black",
    textDecoration: "none",
  };

  const confirmTo = async () => {
    const axiosInfo = await axios.post(`${URL}confirmfrom`, {
      acc_name: accName,
      display_name: displayName,
    });
    await setData(axiosInfo);
    await setFetched(true);
  };

  if (fetched === false) {
    return (
      <div className="container">
        <div className="brand-title">
          <div className="inputs">
            <label>Account Name</label>
            <input
              type="text"
              onChange={(e) => {
                setAccName(e.target.value);
              }}
            />
            <label>Display Name</label>
            <input
              type="text"
              onChange={(e) => {
                setDisplayName(e.target.value);
              }}
            />
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

        {/* <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            margin: "3rem",
          }}
        >
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
            {`${data.message}`}
            {`${data.status}`}
          </p>
        </div> */}
        <Link style={style} to="/payee/from">
          <h1> Step 2 Confirmation Of Payee </h1>
        </Link>
      </div>
    );
  }
}

export default ConfirmationTo;
