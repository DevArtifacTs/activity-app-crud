import React from 'react';
import './Home.css'

// components
import ActivityList from '../components/ActivityList/ActivityList';
import ActivityCard from '../components/ActivityCard/ActivityCard';
import Navbar from '../components/Navbar/Navbar';

function Home(props){

    return (
        <section className='home'>
            <Navbar/>
            <ActivityList/>
        </section>
    )
}

export default Home ;