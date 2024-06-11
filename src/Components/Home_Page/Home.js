import React from 'react';
import NavBar from '../NavBar';
import Main from "./Main";
import Footer from "../Footer";
import ReservationConfirmed from './ReservationConfirmed';
import { useNavigate } from "react-router-dom";

function Home(){
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const date = params.get("date");
    const time = params.get("time");
    let display = "none";
    const navigate = useNavigate();

    console.log("date: ", date);
    console.log("time: ", time);

    if(params.size !== 0){
        display = "block";
        setTimeout(() => {
            navigate("/");
        }, 7000);
    }

    return(
        <>
            <ReservationConfirmed display={display} date={date} time={time}/>
            <NavBar />
            <Main />
            <Footer />
        </>
    )
}

export default Home;