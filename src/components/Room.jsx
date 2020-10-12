import React from 'react'
import {Link} from 'react-router-dom';

const Room = ({room}) => {
    return (        
        <article className="room">
            <div className="img-container">
                <img src={room.image} alt="single room" />
                <div className="price-top">
                    <h6> €{room.price}</h6>
                    <p> per night</p>
                </div>
                <Link to={`/rooms/${room._id}`} className="btn-primary room-link"> Features </Link>
            </div>
                <p className="room-info"> {room.name}</p>
        </article>
    )
}

export default Room
