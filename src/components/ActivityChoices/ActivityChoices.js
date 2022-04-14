import React from "react";
import './ActivityChoices.css'

// import mockup data
import PreparedActivities from "../MockUpData/PreparedActivities";

function ActivityChoices(props){
    return (
        <article className="activity-choices">
            {
                PreparedActivities.map((choice, index)=> {
                    return (
                        <div className="choice-card" key={index} >
                            {choice.component}
                            <p>{choice.name}</p>
                        </div>
                    )
                })
            }
        </article>
    )

}
export default ActivityChoices ;