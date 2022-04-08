import React from "react";
import './ActivityCard.css';

// icons
import {AiFillCloseSquare} from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai";

// for icon configuration
import { IconContext } from "react-icons";

function ActivityCard(props){

    return (
        <>
        <div  className="activity-card">
            {/* <div className="action-btn" >
                <IconContext.Provider value={{color: "blue",className: "global-class-name", margin: "100px" }}>
                    <AiFillEdit/>
                </IconContext.Provider>
                <IconContext.Provider value={{color: "red",className: "global-class-name", margin: "100px" }}>
                    <AiFillCloseSquare/>
                </IconContext.Provider> 
            </div> */}
            <div className="card-content">
                <div className="card-info">
                    <h4 className="card-name">{props.name}</h4>
                    <p className="card-info-item">Duration :{props.duration}</p>
                    <p className="card-info-item">Calories :{props.calories}</p>
                    <p className="card-info-item">Location :{props.location}</p>
                    <p className="card-info-item">date :{props.date}</p>
                </div>
                <div className="card-icon">
                    <div className="action-btn" >
                        <IconContext.Provider value={{color: "blue",className: "global-class-name" }}>
                            <AiFillEdit/>
                        </IconContext.Provider>
                        <IconContext.Provider value={{color: "red",className: "global-class-name" }}>
                            <AiFillCloseSquare/>
                        </IconContext.Provider> 
                     </div>
                    <IconContext.Provider value={{ color: "#992ffc", className: "global-class-name", size : "80px" }}>
                        {props.component}
                    </IconContext.Provider>
                </div>
            </div>
        </div>
        </>
    )
}

export default ActivityCard ;