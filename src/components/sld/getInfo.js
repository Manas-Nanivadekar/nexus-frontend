import React from "react";
import axios from "axios";

import "../../styles/nexus.css";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/v1/";

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
            <input
              type="text"
              onChange={(e) => {
                setCountryId(e.target.value);
              }}
            />
            <label>Country ID</label>
          </div>
          <button onClick={getSld} type="submit">
            Submit
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div>
          <p
            style={{
              display: "flex",
              backgroundColor: "white",
              padding: "1rem 0",
              borderRadius: "0.6rem",
              margin: "12px 0",
              color: "#00152A",
              fontWeight: 700,
              boxShadow: "0 4px 4px -4px gray",
              fontSize: "1rem",
            }}
          >
            {" "}
            {data.data.hash}{" "}
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            padding: "3rem",
            borderRadius: "30px",
            backgroundColor: "#EEF3F5",
            boxShadow: "0 8px 8px -4px lightblue",
          }}
        >
          {console.log(data)}

          {data.data.event.map((item) => {
            return (
              <p
                style={{
                  backgroundColor: "white",
                  padding: "1rem 0",
                  borderRadius: "0.6rem",
                  margin: "12px 0",
                  color: "#00152A",
                  boxShadow: "0 4px 4px -4px gray",
                  fontWeight: 700,
                  fontSize: "1rem",
                }}
              >
                {" "}
                {`${item}`}{" "}
              </p>
            );
          })}
        </div>
      </>
    );
  }
};

export default GetInfo;
