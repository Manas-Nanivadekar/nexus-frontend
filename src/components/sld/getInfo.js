import React from "react";
import axios from "axios";

import "../../styles/nexus.css";
import { Link } from "react-router-dom";

const URL = process.env.REACT_APP_BASE_URL || "http://3.108.226.179:5000/v1/";

const style = {
  color: "black",
  textDecoration: "none",
};

const GetInfo = () => {
  const [countryId, setCountryId] = React.useState("");
  const [data, setData] = React.useState();
  const [fetched, setFetched] = React.useState(false);

  const getSld = async () => {
    const axiosInfo = await axios.get(`${URL}sld?country_id=${countryId}`);
    await setData(axiosInfo);
    await setFetched(true);
  };

  if (fetched === false) {
    return (
      <div className="container">
        <div className="brand-title">
          <div className="inputs">
            <label>Country ID</label>
            <input
              type="text"
              onChange={(e) => {
                setCountryId(e.target.value);
              }}
            />
          </div>
          <button onClick={getSld} type="submit">
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
          {`transaction hash =  ${data.data.hash}`}
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
};

export default GetInfo;
