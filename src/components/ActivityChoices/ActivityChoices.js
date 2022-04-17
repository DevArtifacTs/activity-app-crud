import React from "react";
import './ActivityChoices.css'

// import mockup data
import PreparedActivities from "../MockUpData/PreparedActivities";



function ActivityChoices(props){

    function handleLogoName(logoName){
        props.handleLogoName(logoName);
        // console.log('logoName from ActivityChoices: ', logoName)
        props.handleSelect();
    }

    return (
        <article className="activity-choices">
            {
                PreparedActivities.map((choice, index)=> {
                    return (
                        <div className="choice-card" key={index} onClick ={() => handleLogoName(choice.name) } >
                            {choice.component}
                            <h6>{choice.name}</h6>
                        </div>
                    )
                })
            }
        </article>
    )

}
export default ActivityChoices ;