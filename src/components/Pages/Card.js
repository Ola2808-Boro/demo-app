import React from "react"

export default function Card({ data }) {

    console.log('Props' + data)
    return (

        <div className="card">
            <div className="heros-img">
                <img src={data.image} alt={data.name} />
            </div>
            <div className="heros-status">
                <p>{data.status}</p>
            </div>
            <div className="hero-info">
                <h4>{data.name}</h4>
                <h6>Last Location</h6>
                <h5>{data.location.name}</h5>
            </div>
        </div>





    )
}