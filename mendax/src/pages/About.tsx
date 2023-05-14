import Navbar from "../components/navbar";
import "./About.css";

function About() {
    return (
        <div className="about_margin">
            <Navbar currentPage={2}></Navbar>
            <h1><b>A team project by Team 20</b></h1>
            <h4>University of Kansas: Class of 2023</h4>
            <h4>Created by:</h4>
            <ul>
                <li>Mohit Garg</li>
                <li>Ben Moeller</li>
                <li>Freeman Spray</li>
                <li>Jason Truong</li>
                <li>Will Wyndrum</li>
            </ul>
            <h4><a href="https://github.com/rwyndrum4/MENDAX" target="_blank" rel="noopener noreferrer">Link to our github page</a></h4>
            <h1><b>Credits</b></h1>
            <p>Most assets in the game were created by us, but for some we did use some copyright free assets</p>
            <p>They are listed within the main menu section of our game if you would like to see them</p>
        </div>
    );
}

export default About;