import React from 'react';
import ReservationCSS from './ReservationConfirmed.module.css';

function ReservationConfirmed(props){
    return(
        <div className={ReservationCSS.confirmed} style={{display: props.display}}>
            <h1>Your reservation has been confirmed for <span>{props.date}</span> at <span>{props.time}</span></h1>
        </div>
    )
}

export default ReservationConfirmed;