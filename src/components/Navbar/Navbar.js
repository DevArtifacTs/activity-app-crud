import React from "react";
import './Navbar.css'

// iconss
import {MdKeyboardArrowLeft} from "react-icons/md";
import {FaBarcode} from "react-icons/fa";
import { MdRunCircle } from "react-icons/md";

// for icon configuration
import { IconContext } from "react-icons";

function Navbar(props){

    const style = {color: "purple",  size: '35px' }

    return (
        <nav>
            <IconContext.Provider value={style}>
                <MdRunCircle/>
            </IconContext.Provider>

            <h1 className="nav-header" >
                Exeract
            </h1>
            
        </nav>
    )
}

export default Navbar