import React from "react";

function Output(res) {
  return (
    <div>
      <h1>Output</h1>
      <h2> Status is {res.status} </h2>
      <h2> Message is {res.message} </h2>
      <div className="card mt-3">
        <div className="card-header">Data</div>
        <div className="card-body">
          <pre>${JSON.stringify(res, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}

export default Output;
