import Navbar from "../components/navbar"
import "./NoPage.css"

function NoPage() {
    return (
        <div>
            <Navbar currentPage={-1}></Navbar>
            <h1 className="NoPage_h1">Error</h1>
            <p className="NoPage_p">You have entered an invalid path, please enter a new one</p>
        </div>
    )
}

export default NoPage