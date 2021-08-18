import React from "react";
import axios from "axios";

import "../../styles/nexus.css";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/v1/";

const GetQuoteRouter = () => {
  const [data, setData] = React.useState();
  const [fetched, setFetched] = React.useState(false);
  const [quoteId, setQuoteId] = React.useState("");

  const getQuote = async () => {
    const axiosInfo = await axios.get(
      `${URL}quote?source_currency=${sourceCurrency}&destination_currency=${destinationCurrency}`,
      {
        quote_id: quoteId,
      }
    );
    console.log(data);
    await setData(axiosInfo);
    await setFetched(true);
  };

  const [sourceCurrency, setSourceCurrency] = React.useState("");
  const [destinationCurrency, setDestinationCurrency] = React.useState("");

  if (fetched === false) {
    return (
      <div className="container">
        <div className="brand-title">
          <div className="inputs">
            <label>
              {" "}
              {console.log(`the source currency is ${sourceCurrency}`)} Source
              Currency
            </label>
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
            <label> {console.log(quoteId)} Quote Id</label>
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
      // <div
      //   style={{
      //     margin: "40px 0",
      //     display: "flex",
      //     flexDirection: "column",
      //     justifyContent: "center",
      //     alignItems: "center",
      //     padding: "3rem",
      //     borderRadius: "30px",
      //     backgroundColor: "#ffffff",
      //     boxShadow: "0 8px 8px -4px lightblue",
      //   }}
      // >
      //   {console.log(data)}
      //   <p
      //     style={{
      //       display: "flex",
      //       backgroundColor: "#F6C6EA",
      //       padding: "1rem",
      //       borderRadius: "0.6rem",
      //       margin: "12px 0",
      //       color: "#334257",
      //       fontWeight: 700,
      //       boxShadow: "0 4px 4px -4px gray",
      //       fontSize: "1rem",
      //     }}
      //   >
      //     {data.data.hash}
      //   </p>

      //   {/* <div
      //     style={{
      //       display: "flex",
      //       justifyContent: "center",
      //       flexWrap: "wrap",
      //       alignItems: "center",
      //       margin: "3rem",
      //     }}
      //   >
      //     {data.data.event.map((item) => {
      //       return (
      //         <p
      //           style={{
      //             width: "120px",
      //             height: "60px",
      //             backgroundColor: "#F6C6EA",
      //             padding: "1rem 0",
      //             justifyContent: "center",
      //             display: "flex",
      //             alignItems: "center",
      //             borderRadius: "0.6rem",
      //             margin: "20px",
      //             color: "#334257",
      //             boxShadow: "0 4px 4px -4px gray",
      //             fontWeight: 700,
      //             fontSize: "1rem",
      //           }}
      //         >
      //           {`${item}`}
      //         </p>
      //       );
      //     })}
      //   </div> */}
      // </div>
      <div>
        <h1>Hello World</h1>
        {console.log(data)}
      </div>
    );
  }
};

export default GetQuoteRouter;
