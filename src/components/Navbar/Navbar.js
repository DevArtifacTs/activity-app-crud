import React from "react";
import './Navbar.css'

// icon
import {MdKeyboardArrowLeft} from "react-icons/md";
import {FaBarcode} from "react-icons/fa";

function Navbar(props){

    return (
        <nav>
            <MdKeyboardArrowLeft/>
            <h3>
                Exeract
            </h3>
            <FaBarcode/>
        </nav>
    )
}

export default Navbar