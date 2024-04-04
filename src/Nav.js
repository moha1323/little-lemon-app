import {Routes, Route, Link} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Menu</a></li>
                <li><a>Reservations</a></li>
            </ul>
        </nav>
    )
}

export default Nav;