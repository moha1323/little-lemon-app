import React, { useEffect, useReducer }  from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import BookingForm from './BookingForm';

const initialState = {
    date: undefined,
    time: undefined,
    size: 0,
    occasion: undefined
};

function reducer(state, action) {
    const {type, payload} = action;

    switch(type) {
        case "updateDate": {
            return { ...state, date: payload};
        }

        case "updateTime": {
            return { ...state, time: payload };
        }

        case "updateSize": {
            return { ...state, size: payload };
        }

        case "updateOccasion": {
            return { ...state, occasion: payload };
        }

        default: return state;
    }
};

function BookingPage(){

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => console.log(state, [state]));

    return (
        <>
            <NavBar />
            <div className="reservations">
                <h1>Reservations</h1>
                <BookingForm state={state} dispatch={dispatch}/>
            </div>
            <Footer />
        </>
    )
}

export default BookingPage;