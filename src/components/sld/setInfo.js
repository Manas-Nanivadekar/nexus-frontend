import React from "react";
import axios from "axios";

import "../../styles/nexus.css";
// import Output from "../../pages/output";

const URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000/v1/";

function SetInfo() {
  const [iban, setIban] = React.useState(false);
  const [countryId, setCountryId] = React.useState(false);
  const [localBankNumber, setLocalBankNumber] = React.useState("");
  const [localBankId, setLocalBankId] = React.useState("");
  const [aliasConversion, setAliasConversion] = React.useState(false);
  const aliasFormat = "Something";
  const [aliasName, setAliasName] = React.useState("");
  const [aliasDesc, setAliasDesc] = React.useState("");
  const [maxDestValue, setMaxDestValue] = React.useState("");
  const [accountValidationAvailable, setAccountValidationAvailable] =
    React.useState(false);
  const [payeeType, setPayeeType] = React.useState("");
  const [ipsTimeout, setIpsTimeout] = React.useState(false);
  const [data, setData] = React.useState();
  const [fetched, setFetched] = React.useState(false);

  const setSld = async () => {
    const axiosInfo = await axios.post(`${URL}sld?country_id=${countryId}`, {
      iban: iban,
      local_bank_number: localBankNumber,
      local_bank_id: localBankId,
      alias_conversion: aliasConversion,
      alias_name: aliasName,
      alias_format: aliasFormat,
      alias_desc: aliasDesc,
      max_destination_value: maxDestValue,
      account_validation_available: accountValidationAvailable,
      payee_type: payeeType,
      ips_timeout: ipsTimeout,
    });
    await setData(axiosInfo.data);
    await setFetched(true);
  };

  if (fetched === false) {
    return (
      <div className="container">
        <div className="brand-title">BIS</div>
        <div className="inputs">
          <label>IBAN</label>
          <input onChange={(e) => setIban(e.target.value)} type="text" />
          <label>Country Id</label>
          <input onChange={(e) => setCountryId(e.target.value)} type="text" />
          <label>Local Bank Number</label>
          <input
            onChange={(e) => setLocalBankNumber(e.target.value)}
            type="text"
          />
          <label>Local Bank Id</label>
          <input onChange={(e) => setLocalBankId(e.target.value)} type="text" />
          <label>Alias Conversion</label>
          <input
            onChange={(e) => setAliasConversion(e.target.value)}
            type="text"
          />
          <label>Alias Name</label>
          <input onChange={(e) => setAliasName(e.target.value)} type="text" />
          <label>Alias Description</label>
          <input onChange={(e) => setAliasDesc(e.target.value)} type="text" />
          <label>Max Destination Value</label>
          <input
            onChange={(e) => setMaxDestValue(e.target.value)}
            type="text"
          />
          <label>Is Account Validation Available</label>
          <input
            onChange={(e) => setAccountValidationAvailable(e.target.value)}
            type="text"
          />
          <label>Payee Type</label>
          <input onChange={(e) => setPayeeType(e.target.value)} type="text" />
          <label>IPS Timeout</label>
          <input onChange={(e) => setIpsTimeout(e.target.value)} type="text" />
          <button onClick={setSld} type="submit">
            Submit
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <h1> Hello World </h1>
        {console.log(data)}
        <p> {data.hash} </p>
      </>
    );
  }
}

export default SetInfo;
