import React from "react"
const Jumbotron = () => {
    return (
        <div className="jumbotron container bg-light my-4 p-2">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
        </div>

    )
}
export default Jumbotron