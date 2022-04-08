import React from "react";
import './ActivityList.css'

// mockup data
import preparedActivity from "../MockUpData/PreparedActivities";
import activityListData from "../MockUpData/ActivityMockUpdata";

// components
import ActivityCard from "../ActivityCard/ActivityCard";
import Button from "../Button/Button";
import './ScrollBar.css';

function ActivityList(props){

    const mockUps = activityListData ;

    return (
        <section className="activity-list-container">
            <div className="burb-header">
                <h3>Your Activity</h3>
            </div>
            <div className="activity-cards-container">
                {/* card go here */}
                {
                    mockUps.map((card, index) => {
                        return (
                                <ActivityCard 
                                    key={index} 
                                    name ={card.name}
                                    description = {card.description}
                                    duration = {card.duration}
                                    date = {card.date}
                                    location = {props.location}
                                    calories = {card.calories}
                                    component={card.component}  
                                />
                            )
                    })
                }
            </div>
        </section>
    )
}

export default ActivityList ; 