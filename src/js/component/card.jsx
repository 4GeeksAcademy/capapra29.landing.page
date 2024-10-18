import React from "react"
const Card = ({imagen}) => {
    return (

        <div className="card" style={{ width: "17rem" }}>
            <img src={imagen} className="card-img-top" alt="..." style={{height:"150px"}} />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
            </ul>
            <div className="card-body">
                <a className="btn btn-primary btn-lg" href="#" role="button">Find out more!</a>
            </div>

            </div>
    )
}
export default Card