import React, {useState, useEffect} from "react";
import './ActivityCard.css';

// icons
import {AiFillCloseSquare} from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai";
import { BiRun } from "react-icons/bi";
import { BiCycling } from "react-icons/bi";
import { BiSwim } from "react-icons/bi";
import { GiHiking } from "react-icons/gi";

// for icon configuration
import { IconContext } from "react-icons";

const icons = {
    run: <BiRun />,
    bicycleRide: <BiCycling />,
    swim: <BiSwim />,
    hiking: <GiHiking />,
  };

function ActivityCard(props){


    return (
        <>
        <div  className="activity-card">
            <div className="card-content">
                
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
                        {icons[props.logo]}
                    </IconContext.Provider>
                </div>

                <div className="card-info">
                    <h4 className="card-name">{props.name}</h4>
                    <p className="card-info-item">Description :{props.description}</p>
                    <p className="card-info-item">Duration :{props.duration}</p>
                    <p className="card-info-item">Calories :{props.calories}</p>
                    <p className="card-info-item">Location :{props.location}</p>
                    <p className="card-info-item">date :{props.timestamp}</p>
                    <p className="card-info-item">calories :{props.calories}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default ActivityCard ;