import React from 'react';
import NavBar from '../NavBar';
import BookingForm from './BookingForm';

function BookingPage(){
    return (
        <>
            <NavBar />
            <div className="reservations">
                <h1>Reservations</h1>
                <BookingForm />
            </div>
        </>
    )
}

export default BookingPage;