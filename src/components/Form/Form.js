import React from "react";
import './Form.css';

// components
import ActivityChoices from "../ActivityChoices/ActivityChoices";
import Button from "../Button/Button";

function Form(props){

    return(
        <>
        <form action="">
            <legend className="form-headline">Create New Activity</legend>
            <ActivityChoices/>
            <article className="input-form">
                <fieldset className="name-field">
                    <label htmlFor="activity-name">Name</label>
                    <input className="activity-info-input" id="activity-name" type="text" placeholder="activity name" />
                </fieldset>

                <fieldset className="description-field">
                    <label htmlFor="activity-description">Description</label>
                    <textarea  id="activity-description" type="text" placeholder="descript about your activity" />
                </fieldset>

                <fieldset className="duration-field">
                    <label htmlFor="activity-duration">Duration</label>
                    <input className="activity-info-input" id="activity-duration" type="text" placeholder="how long it last?" />
                </fieldset>

                <fieldset className="location-field">
                    <label htmlFor="activity-location">Location</label>
                    <input className="activity-info-input" id="activity-location" type="text" placeholder="where are you did it?" />
                </fieldset>

                <fieldset className="date-field">
                    <label htmlFor="activity-date">Date</label>
                    <input className="activity-info-input" id="activity-date" type="date" />
                </fieldset>

                <Button type='submit' text='submit' />
            </article>
        </form>
        </>
    )
}

export default Form ;