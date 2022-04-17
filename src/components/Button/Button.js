import React from "react";
import './Button.css';


function Button(props){

    return (
        <button type={props.type} id="button-component" className={props.type}>
            {props.text}
        </button>
    )
}

export default Button;