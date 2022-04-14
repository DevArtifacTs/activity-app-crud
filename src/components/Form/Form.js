import React, {useState} from "react";
import './Form.css';
import * as moment from 'moment';

// components
import ActivityChoices from "../ActivityChoices/ActivityChoices";
import Button from "../Button/Button";

// axios
const Axios = require('axios');

function Form(props){

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, SetLocation] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState();

    const  isNameOk = name.length >= 3
    function handleName(e){
        setName(e.target.value);
        console.log(name);
    }

    const  isDescriptionOk = description.length >= 10
    function handleDescription(e){
        setDescription(e.target.value)
        console.log(description)
    }

    const  isLocationOk = location.length > 2
    function handleLocation(e){
        SetLocation(e.target.value);
        console.log(location)
    }

    const  isDateOk = Boolean(date);
    function dateReformat(dateString){
        const dateArray = dateString.split('-');
        return dateArray[2]+ '/' + dateArray[1]+ '/' + dateArray[0];
    }

    const  isDurationOk = duration > 0
    function handleDuration(e){
        setDuration(e.target.value);
        console.log(duration);
    }

    function handleDate(e){
        const dateString = dateReformat(e.target.value)
        const isDate = moment(dateString, 'DD/MM/YYYY').isValid();
        if(isDate){
            setDate(dateString);
            console.log(date);
            return;
        } else {
            console.log('invalid date format')
            return;
        }   
    }

    const isInputFormOk =   
        Boolean(isNameOk) && 
        Boolean(isDescriptionOk) && 
        Boolean(isDateOk) && 
        Boolean(isLocationOk) && 
        Boolean(isDurationOk)

    function handleSubmit(e){
        e.preventDefault()
        console.log('name', e.target.name.value)
        console.log('description', e.target.description.value)
        console.log('date', e.target.date.value)
        console.log('location', e.target.location.value)
        console.log('duration', e.target.duration.value)
        console.log('isInputFormOk', isInputFormOk);

        // axios goes here
        if(isInputFormOk){
            // http post
            // fetch({ url : 'localhost:4001'})
            // return
        } else {
            // alert('valid value')
        }
    }

    return(
        <>
        <form onSubmit={handleSubmit} >
            <legend className="form-headline">Create New Activity</legend>
            {/* activities choices */}
            <ActivityChoices/>
            
            <article className="input-form">
                <fieldset className="name-field">
                    <label htmlFor="activity-name" style={{color : isNameOk? 'black' : 'red' }}>Name</label>
                    <input 
                        value={name} 
                        name='name'
                        className="activity-info-input" 
                        id="activity-name" type="text" 
                        placeholder="activity name" 
                        onChange={handleName}
                    />
                </fieldset>

                <fieldset className="description-field">
                    <label htmlFor="activity-description" style={{color : isDescriptionOk? 'black' : 'red' }}>Description</label>
                    <textarea 
                        value={description}  
                        name='description'
                        id="activity-description" 
                        type="text" 
                        placeholder="descript about your activity" 
                        onChange={ handleDescription }
                    />
                </fieldset>

                <fieldset className="duration-field">
                    <label htmlFor="activity-duration" style={{color : isDurationOk? 'black' : 'red' }}>Duration(Minute)</label>
                    <input 
                        value={duration} 
                        name='duration'
                        className="activity-info-input" 
                        id="activity-duration" 
                        type='number' placeholder="how long it last?" 
                        onChange={handleDuration}
                    />
                </fieldset>

                <fieldset className="location-field">
                    <label htmlFor="activity-location" style={{color : isLocationOk? 'black' : 'red' }}>Location</label>
                    <input 
                        value={location} 
                        name='location'
                        className="activity-info-input" 
                        id="activity-location" 
                        type="text" 
                        placeholder="where are you did it?" 
                        onChange={handleLocation}
                    />
                </fieldset>

                <fieldset className="date-field">
                    <label htmlFor="activity-date" style={{color : isDateOk? 'black' : 'red' }}>Date</label>
                    <input 
                        name='date' 
                        className="activity-info-input" 
                        id="activity-date" 
                        type="date" 
                        onChange={handleDate}
                    />
                </fieldset>

                <Button type='submit' text='submit' />
            </article>
        </form>
        </>
    )
}

export default Form ;