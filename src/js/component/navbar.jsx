import React from "react"
const Navbar = () => {
    return (
        <nav className="navbar bg-body-tertiary bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-white">Start Bootstrap</a>
                <form className="d-flex" role="search">
                    <p className="text-white mx-2 my-2"><b>Home</b></p>
                    <p className="text-white mx-2 my-2">About</p>
                    <p className="text-white mx-2 my-2">Services</p>
                    <p className="text-white mx-2 my-2">Contact</p>
                </form>
                
            </div>
        </nav>
    )
}
export default Navbar