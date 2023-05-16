import Navbar from "../components/navbar";
import List from "../components/List";
import "./About.css";

const AUTHORS: string[] = [
  "Mohit Garg",
  "Ben Moeller",
  "Freeman Spray",
  "Jason Truong",
  "Will Wyndrum",
];

function About() {
  return (
    <>
      <Navbar currentPage={2}></Navbar>
      <div className="about_margin">
        <h1>
          <b>A team project by:</b>
        </h1>
        <List items={AUTHORS}></List>
        <br />
        <p>
          This was a senior design project that we created as part of our
          Software Engineering class at The University of Kansas
        </p>
        <p>
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

        <h1>
          <b>Credits</b>
        </h1>
        <p>
          Most assets in the game were created by us, but for some we did use
          some copyright free assets
        </p>
        <p>
          They are listed within the main menu section of our game if you would
          like to see them
        </p>
      </div>
    </>
  );
}

export default About;
