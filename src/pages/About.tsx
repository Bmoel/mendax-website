import React from "react";
import Navbar from "../components/navbar";
import List from "../components/List";

const AUTHORS: string[] = [
  "Mohit Garg",
  "Ben Moeller",
  "Freeman Spray",
  "Jason Truong",
  "Will Wyndrum",
];

function About() {
  return (
    <React.Fragment>
      <Navbar currentPage={2}></Navbar>
      <div className="container">
        <div className="row">
          <h1 className="text-wrap"><b>A team project by:</b></h1>
        </div>
        <div className="row">
          <List items={AUTHORS}></List>
        </div>
        <div className="row">
          <p className="text-wrap">
            This was a senior design project that we created as part of our
            Software Engineering class at The University of Kansas
          </p>
        </div>
        <div className="row">
          <p className="text-wrap">
            Our code is available to see on{" "}
            <a
              href="https://github.com/rwyndrum4/MENDAX"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            , please take a look if interested
          </p>
        </div>
        <div className="row">
          <h1 className="text-wrap"><b>Credits</b></h1>
        </div>
        <div className="row">
          <p className="text-wrap">
            Most assets in the game were created by us, but for some we did use
            some copyright free assets
          </p>
        </div>
        <div className="row">
          <p className="text-wrap">
            They are listed within the main menu section of our game if you would
            like to see them
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default About;
