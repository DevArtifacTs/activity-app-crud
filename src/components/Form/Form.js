import React, {useEffect, useState} from "react";
import './Form.css';
import * as moment from 'moment';

// components
import ActivityChoices from "../ActivityChoices/ActivityChoices";
import Button from "../Button/Button";

// Axios components
import { postRecords } from '../../api/index'

function Form(props){

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [location, SetLocation] = useState('');
    const [date, setDate] = useState('');
    const [duration, setDuration] = useState(0);
    const [calories, setCalories] = useState(0);

    // for input validation boolean
    const [isNameOk, setIsNameOk] = useState(false);
    const [isSelect, setIsSelect] =  useState(false);

    function handleSelect(){
        setIsSelect(true);
    }
    
    function handleName(activityName){
        setName(activityName);
    }

    useEffect(()=> {
        handleName(props.logoName);
        setIsSelect(false);
        if(name.length >= 3){
            setIsNameOk(true);
            console.log('(in useEffect)name is', name);
        }
    }, [props.logoName, isSelect])

    const  isDescriptionOk = description.length >= 10
    function handleDescription(e){
        setDescription(e.target.value)
        console.log('description: ', description)
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

    const isCaloriesOk = calories > 0
    function handleCalories(e){
        setCalories(e.target.value);
        console.log('calories: ', calories);
    }

    function handleClearForm(){
        setName('');
        setDescription('');
        SetLocation('');
        setDate('');
        setDuration(0);
        setCalories(0);
        setIsNameOk(false);
        setIsSelect(false);

        // clear input date form
        const now = new Date();
        const dateInput = document.getElementById('activity-date');
        dateInput.value = now ;
    }

    const isInputFormOk =   
        Boolean(isNameOk) && 
        Boolean(isDescriptionOk) && 
        Boolean(isDateOk) && 
        Boolean(isLocationOk) && 
        Boolean(isDurationOk) &&
        Boolean(isCaloriesOk)

    function handleSubmit(e){
        e.preventDefault()
        // create data body
        const body = {
            name : e.target.name.value,
            description : e.target.description.value,
            timestamp : e.target.date.value,
            location : e.target.location.value,
            duration : e.target.duration.value,
            calories : e.target.calories.value,
            logo : props.logoName
        }

        // axios goes here
        if(isInputFormOk){
            console.log('body: ', body);
            // http post
            // fetch({ url : 'localhost:4001'})
            ( async()=>{
                const response = await postRecords(body);
                console.log('submitted data', response.data);
                console.log('submitted response', response.status);

                // clear input form
                handleClearForm();
                //update tricker value
                props.handleAddActivity();
            } )()
        } else {
            alert('invalid input form value');
        };
    }

    return(
        <>
        <form onSubmit={handleSubmit} >
            <legend className="form-headline">Create New Activity</legend>
            {/* activities choices */}
            <ActivityChoices handleLogoName={props.handleLogoName}  handleSelect={handleSelect}/>

            <article className="input-form">
                <fieldset className="name-field">
                    <label htmlFor="activity-name" style={{color : isNameOk? 'black' : 'red' }}>Name</label>
                    <input 
                        placeholder='Please select activity' 
                        value={name} 
                        name='name'
                        className="activity-info-input" 
                        id="activity-name" type="text" 
                        onChange={handleName}
                        disabled
                    />
                </fieldset>

                <fieldset className="description-field">
                    <label htmlFor="activity-description" style={{color : isDescriptionOk? 'black' : 'red' }}>Description</label>
                    <textarea 
                        value={description}  
                        name='description'
                        id="activity-description" 
                        type="text" 
                        placeholder="describe about your activity" 
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
                        type='number' 
                        placeholder="how long it last?" 
                        onChange={handleDuration}
                    />
                </fieldset>
                <fieldset className="calories-field">
                    <label htmlFor="activity-calories" style={{color : isCaloriesOk? 'black' : 'red' }}>Calories</label>
                    <input 
                        value={calories} 
                        name='calories'
                        className="activity-info-input" 
                        id="activity-calories" 
                        type='number' 
                        placeholder="How energy is consumed?" 
                        onChange={handleCalories}
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