import React, {useState, useEffect} from 'react';
import './Home.css'

// components
import ActivityList from '../components/ActivityList/ActivityList';
import Navbar from '../components/Navbar/Navbar';
import Form from '../components/Form/Form';

function Home(props){

    const [logoName, setLogoName] = useState('');
    const [isAddNewActivity, setIsAddNewActivity] = useState(false);

    const handleLogoName = (logoName) => {
        setLogoName(logoName);
    };

    const handleAddActivity = () => {
        setIsAddNewActivity(true)
    }

    useEffect(()=>{
        console.log('logo from Home page: ', logoName);
        console.log('isAdd from Home page: ', isAddNewActivity);
        setIsAddNewActivity(false)
    }, [logoName, isAddNewActivity])


    return (
        <section className='home'>
            <Navbar/>
            <Form handleLogoName={handleLogoName} logoName={logoName} handleAddActivity={handleAddActivity} />
            <ActivityList isAddNewActivity={isAddNewActivity}   />
        </section>
    )
}

export default Home ;