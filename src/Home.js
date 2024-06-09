import React from 'react';
import ReservationConfirmed from './ReservationConfirmed';
import NavBar from './NavBar';
import Main from "./Main";
import Footer from "./Footer";

function Home(props){
    let display = "none";
    if(props.reservation === "Yes"){
        display = "block"
    }

    return(
        <>
            <ReservationConfirmed display={display}/>
            <NavBar />
            <Main />
            <Footer />
        </>
    )
}

export default Home;