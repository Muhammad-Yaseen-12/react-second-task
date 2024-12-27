import React from 'react'
import './../App.css';

function Mediacard(props) {
    return (
        <div>
            <div className='card'>
                <h2>{props.title}</h2>
                <img src={props.img} alt="Logo" />
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Mediacard