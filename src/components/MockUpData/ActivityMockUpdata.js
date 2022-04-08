import { BiRun } from "react-icons/bi";
import { BiCycling } from "react-icons/bi";
import { BiSwim } from "react-icons/bi";
import { GiHiking } from "react-icons/gi";

const activityListData = [
    {
        id : 0,
        name : 'run',
        description : 'This is my run activity.',
        duration : '30 min',
        date: '04/04/2022',
        location : 'Lamphun',
        calories: 300,
        component : <BiRun />
    },  
    {
        id : 1,
        name : 'cycling',
        description : 'I am cycling along the road with my friends.',
        duration : '60 min',
        date: '05/04/2022',
        location : 'BKK',
        calories: 350,
        component : <BiCycling />
    },  
    {
        id : 2,
        name : 'swimming',
        description : 'I was here at chiangmai university.',
        duration : '30 min',
        date: '06/04/2022',
        location : 'Chiangmai',
        calories: 400,
        component : <BiSwim/>
    },  
    {
        id : 3,
        name : 'pushup',
        description : 'I think I need to pushup yesterday evening. ',
        duration : '30 min',
        date: '07/04/2022',
        location : 'BKK',
        calories: 150,
        component : <GiHiking/>
    },  
    {
        id : 4,
        name : 'run',
        description : 'This is my run activity.',
        duration : '30 min',
        date: '04/04/2022',
        location : 'Lamphun',
        calories: 300,
        component : <BiRun />
    },  
    {
        id : 5,
        name : 'cycling',
        description : 'I am cycling along the road with my friends.',
        duration : '60 min',
        date: '05/04/2022',
        location : 'BKK',
        calories: 350,
        component : <BiCycling />
    },  
    
]
export default activityListData ;