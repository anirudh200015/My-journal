import React from "react"
import pin from "../assets/location-pin.png"

function Card(props){
  
    let l =props.item.location;
    let location=l.toUpperCase();

    return (
        
    <div className="card">
            <img className="card--image" src={props.item.imageUrl}/>
        <div className="info">
        <div className="location-div">
            <img className="location--pin"src={pin}/>
            <p className="country">{location} </p>
            <a href={props.item.googleMapsUrl} className="maps">View on Google Maps</a>
        </div>
        <h1>{props.item.title}</h1>
        <p className="date" >{`${props.item.startDate} - ${props.item.endDate}`}</p>
        <p className="discription" >{props.item.description}</p>
        </div>
    </div>
    )
}

export default Card;