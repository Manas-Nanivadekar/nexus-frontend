import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const style = {
    color: "black",
    textDecoration: "none",
  };

  const style_two = {
    color: "black",
  };

  const notes = {
    backgroundColor: "#ffffcc",
  };

  const info = {
    backgroundColor: "#ddffdd",
  };

  return (
    <div>
      <div style={notes}>
        <h2>
          {" "}
          Note! this frontend is just to show the API's working individually but
          after joining the dots, a full working Nexus will be available{" "}
        </h2>
      </div>

      <div style={info}>
        <h2>
          There might be some browser isses and one might not get full response.{" "}
        </h2>

        <h2>
          {" "}
          In that case, fork the API collection and try it out on Postman{" "}
        </h2>
        <h3> Link will be given where it might be needed </h3>
      </div>
      <br />
      <br />
      <h3> Click Below and go to the API you wanna try out </h3>

      <Link style={style} to="/sld">
        <h1> SLD </h1>
      </Link>
      <Link style={style} to="/quote">
        <h1> Quote </h1>
      </Link>
      <Link style={style} to="/payee">
        <h1> Payee Confirmation </h1>
      </Link>
      <Link style={style} to="/final">
        <h1> Payment </h1>
      </Link>

      <br />
      <br />

      <div>
        <h2>
          There are things that are yet to be covered. I've created a summary of
          the implementation.{" "}
          <a
            style={style_two}
            href="https://docs.google.com/document/d/1LzXQMEBPqCvtLfUc97-zL7Bu2CQl2yXnn5wyLb2BJs0/edit?usp=sharing"
          >
            {" "}
            Click Here
          </a>
        </h2>
        <h2>
          The code for this implementation is available on{" "}
          <a
            style={style_two}
            href="https://github.com/Manas-Nanivadekar/nexus-mono-repo"
          >
            {" "}
            here
          </a>
        </h2>
      </div>
    </div>
  );
}

export default Home;
