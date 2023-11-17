import React from "react";
import Navbar from "../components/navbar";

function Downloads() {
  return (
    <React.Fragment>
      <Navbar currentPage={1}></Navbar>
      <div className="container text-center">
        <div className="row">
          <p className="text-wrap fw-bold fs-1">
            Check out our game on itch.io!
          </p>
        </div>
        <iframe src="https://itch.io/embed/2064079">
          <a href="https://freemanspray.itch.io/mendax">
            Mendax by freemanspray
          </a>
        </iframe>
      </div>
    </React.Fragment>
  );
}

export default Downloads;
