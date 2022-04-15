import React, {useState, useEffect} from "react";
import './ActivityList.css'

// mockup data
// import preparedActivity from "../MockUpData/PreparedActivities";
import activityListData from "../MockUpData/ActivityMockUpdata";

// components
import ActivityCard from "../ActivityCard/ActivityCard";
import './ScrollBar.css';

// external logical components
import { useUserRecords } from '../../hooks'
import { getRecords } from '../../api/index';
import { deleteRecords } from "../../api";


function ActivityList(props){


    const [records, setRecords] = useState([]);
    const [isDeleteRecord, setIsDeleteRecord] = useState(false);

    const handleDeleteRecord = async (_id) => {
        const response = deleteRecords(_id);
        console.log(response.data);
        console.log(response.status);
        setIsDeleteRecord(true);
    }

    useEffect(()=> {
        (async()=>{
            const response = await getRecords();
            if(response.status === 200 ){
                setRecords(response);
                setIsDeleteRecord(false)
            } else {
                alert('cannot connect to server.');
            };
        })();
    }, [props.isAddNewActivity, isDeleteRecord]);

    

    return (
        <section className="activity-list-container">
            <div className="burb-header">
                <h3>Your Activity</h3>
            </div>
            <div className="activity-cards-container">
                {/* card go here */}
                { records.data &&
                    records.data.map((card, index) => {
                        return (
                                <ActivityCard 
                                    key={index} 
                                    name ={card.name}
                                    description = {card.description}
                                    duration = {card.duration}
                                    timestamp = {card.timestamp}
                                    location = {card.location}
                                    calories = {card.calories}
                                    logo={card.logo}  
                                    _id = {card._id}
                                    handleDeleteRecord={handleDeleteRecord}
                                />
                            )
                    })
                }
            </div>
        </section>
    )
}

export default ActivityList ; 