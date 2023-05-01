import Navbar from "../components/navbar"

function About() {
    return (
        <div>
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
        </div>
    );
}

export default About;