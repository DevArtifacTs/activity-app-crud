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


function ActivityList(props){

    // get records in MongoDB
    // const [records, setRecords] = useUserRecords();

    const [records, setRecords] = useState([]);

    useEffect(()=> {
        (async()=>{
            const response = await getRecords();
            console.log('records data', response.data);
            console.log('records response', response.status);

            if(response.status === 200 ){
                setRecords(response);
            } else {
                alert('cannot connect to server.');
            };
        })();
        console.log(records);
    }, []);

    
    // const mockUps = activityListData ;
    // console.log(records) ;

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
                                />
                            )
                    })
                }
            </div>
        </section>
    )
}

export default ActivityList ; 