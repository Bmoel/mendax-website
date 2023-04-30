import Navbar from "../components/navbar"
import "./NoPage.css"

function NoPage() {
    return (
        <div>
            <Navbar imgPath="/MendaxLogo.png" currentPage={-1}></Navbar>
            <h1>Error</h1>
            <p>You have entered an invalid path O_o</p>
        </div>
    )
}

export default NoPage