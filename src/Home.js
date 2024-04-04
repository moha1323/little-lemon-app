import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import logo from "./images/Logo.png";

function Home(){
    return(
        <>
            <header>
                <img src={logo} alt="Little Lemon Logo"/>
                <Nav className="headerNav"/>
            </header>
            <Main/>
            <Footer/>
        </>
    )
}

export default Home;