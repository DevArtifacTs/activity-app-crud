import React from 'react';
import './Home.css'

// components
import ActivityList from '../components/ActivityList/ActivityList';
import ActivityCard from '../components/ActivityCard/ActivityCard';
import Navbar from '../components/Navbar/Navbar';
import Form from '../components/Form/Form';

function Home(props){

    return (
        <section className='home'>
            <Navbar/>
            <ActivityList/>
            <Form/>
        </section>
    )
}

export default Home ;