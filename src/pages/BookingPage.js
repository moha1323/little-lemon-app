import React, { useEffect, useReducer }  from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import BookingForm from './BookingForm';

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }

    return result;
};

const submitAPI = function(formData) {
    return true;
};

const initialState = {
    date: undefined,
    time: undefined,
    size: 1,
    occasion: undefined,
    availableTimes: fetchAPI(new Date()),
    confirmed: "no"
};

function reducer(state, action) {
    const {type, payload} = action;

    switch(type) {
        case "updateDate": {
            return { ...state, date: payload};
        }

        case "updateTime": {
            state.availableTimes = state.availableTimes.filter((element, _) => element !== payload);
            return { ...state, time: payload };
        }

        case "updateSize": {
            return { ...state, size: payload };
        }

        case "updateOccasion": {
            return { ...state, occasion: payload };
        }

        case "updateAvailableTimes": {
            return {...state, availableTimes: payload};
        }

        case "updateConfirmed": {
            return { ...state, confirmed: payload };
        }

        default: return state;
    }
};

function BookingPage(){

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {console.log(state)}, [state]);

    if(state.confirmed === "Yes"){
        submitAPI(state);
    }

    useEffect(() => {
        if(state.confirmed === "Yes"){
            localStorage.setItem(state.date, JSON.stringify(state))
            const storedState = JSON.parse(localStorage.getItem(state.date));
            console.log("state: ",storedState)
        }
    },[state]);

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