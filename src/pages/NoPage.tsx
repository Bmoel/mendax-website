import React from "react"
import Navbar from "../components/navbar"

function NoPage() {
    return (
        <React.Fragment>
            <Navbar currentPage={-1}></Navbar>
            <div className="container text-center">
                <div className="row">
                    <h1 className="text-wrap text-danger fw-bold">Error</h1>
                </div>
                <div className="row">
                    <p className="NoPage_p">You have entered an invalid path, please enter a new one</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NoPage