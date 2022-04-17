import React, {useState, useEffect} from "react";
import './ActivityCard.css';

// components
import Button from "../Button/Button";
import * as moment from 'moment';

// icons
import {AiFillCloseSquare} from "react-icons/ai";
import {AiFillEdit} from "react-icons/ai";
import { BiRun } from "react-icons/bi";
import { BiCycling } from "react-icons/bi";
import { BiSwim } from "react-icons/bi";
import { GiHiking } from "react-icons/gi";
import { BiWalk} from "react-icons/bi";
import { RiFootballLine } from "react-icons/ri";

// for icon configuration
import { IconContext } from "react-icons";

// axios component
import { putRecord } from "../../api";

const icons = {
    run: <BiRun />,
    walk : <BiWalk/>,
    cycling: <BiCycling />,
    swimming: <BiSwim />,
    hiking: <GiHiking />,
    football :  <RiFootballLine />
  };

function ActivityCard(props){

    const [isEditForm, setIsEditForm] = useState(false);

    function handleEditForm(e){
        e.preventDefault();
        setIsEditForm(!isEditForm);
        console.log('in function isEditForm', isEditForm)
    }
    
    function handleSubmitEditRecord(e){
        e.preventDefault();
        props.handleSubmitEditRecord();
    }

    function handleDelete(_id){
        props.handleDeleteRecord(_id);
    }

    useEffect(()=>{
        console.log('in useEffect isEditForm', isEditForm);
        // setDescription('');
        // SetLocation('');
        // setDate('');
        // setDuration(0);
        // setCalories(0);
    }, [isEditForm])

    // form info
    const [description, setDescription] = useState(props.description);
    const [location, SetLocation] = useState(props.location);
    const [date, setDate] = useState(props.timestamp);
    const [duration, setDuration] = useState(props.duration);
    const [calories, setCalories] = useState(props.calories);

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
            return console.log(date);
        } else {
            return console.log('invalid date format');
        }   
    }

    const isCaloriesOk = calories > 0
    function handleCalories(e){
        setCalories(e.target.value);
        console.log('calories: ', calories);
    }

    const isInputFormOk =   
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
            logo : props.logo
        }

        // axios goes here
        if(isInputFormOk){
            console.log('body: ', body);
            // http post
            ( async()=>{
                const response = await putRecord(props._id, body);
                console.log('submitted data', response.data);
                console.log('submitted response', response.status);

                //update tricker value

                props.handleSubmitEditRecord();
            } )()
        } else {
            alert('invalid input form value');
        };
    }

    return (
        <>
        <div  className="activity-card">
            <div className="card-content">
                
                <div className="card-icon">
                    <div className="action-btn" >
                        <IconContext.Provider value={{color: "blue",className: "global-class-name" }}>
                            <AiFillEdit onClick={handleEditForm} />
                        </IconContext.Provider>
                        <IconContext.Provider value={{color: "red",className: "global-class-name" }}>
                            <AiFillCloseSquare onClick={() => handleDelete(props._id)} />
                        </IconContext.Provider> 
                    </div>
                    <IconContext.Provider value={{ color: "#992ffc", className: "global-class-name", size : "80px" }} >
                        {icons[props.logo]  }
                    </IconContext.Provider>
                </div>

                {!isEditForm &&
                <div className="card-info">
                    <h4 className="card-name">{props.name}</h4>
                    <p className="card-info-item">Description :{props.description}</p>
                    <p className="card-info-item">Duration :{props.duration}</p>
                    <p className="card-info-item">Calories :{props.calories}</p>
                    <p className="card-info-item">Location :{props.location}</p>
                    <p className="card-info-item">date :{props.timestamp}</p>
                </div>
                }
                {isEditForm &&
                <>
                <form className="card-info" 
                onSubmit={ (e)=>{
                    handleSubmit(e);
                    handleEditForm(e);
                    
                    }  } >
                    {/* <label htmlFor="card-name">
                        Name<input type="text" placeholder="activity's name" id="card-name"   /> 
                    </label> */}
                    <label htmlFor="card-activity-description">
                        Description
                        <textarea 
                            value={description}
                            name='description'
                            id="card-activity"
                            type="text" 
                            placeholder="activity description." 
                            onChange={ handleDescription }  
                        /> 
                    </label>
                    <label htmlFor="card-activity-duration">
                        Duration
                        <input 
                            value={duration} 
                            name='duration'
                            className="activity-info-input" 
                            id="card-activity-duration" 
                            type='number' 
                            placeholder="how long it last?" 
                            onChange={handleDuration}
                        /> 
                    </label>
                    <label htmlFor="card-activity-calories">
                        Calories
                        <input 
                            value={calories} 
                            name='calories'
                            className="activity-info-input" 
                            id="card-activity-calories" 
                            type='number' 
                            placeholder="How energy is consumed?" 
                            onChange={handleCalories}
                        /> 
                    </label>
                    <label htmlFor="card-activity-location">
                        Location
                        <input 
                            value={location} 
                            name='location'
                            className="activity-info-input" 
                            id="card-activity-location" 
                            type="text" 
                            placeholder="where are you did it?" 
                            onChange={handleLocation}
                        /> 
                    </label>
                    <label htmlFor="card-activity-date">
                        Date
                        <input
                            value={date}
                            name='date' 
                            className="activity-info-input" 
                            id="card-activity-date" 
                            type="date" 
                            
                            // onChange={handleDate}
                            onChange={event => setDate(event.target.value)}
                        /> 
                    </label>
                    <Button type='submit' text='submit' onClick={handleSubmitEditRecord} />
                </form>
                </>
                }
                
            </div>
        </div>
        </>
    )
}

export default ActivityCard ;