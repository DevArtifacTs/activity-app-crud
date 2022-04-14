import React, {useState, useEffect} from 'react';
import './Home.css'

// components
import ActivityList from '../components/ActivityList/ActivityList';
import Navbar from '../components/Navbar/Navbar';
import Form from '../components/Form/Form';

function Home(props){

    // const [logo, setLogo] = useState('');

    // const handleLogoName = (logoName) => {
    //     setLogo(logoName);
    // }

    return (
        <section className='home'>
            <Navbar/>
            <Form />
            <ActivityList/>
        </section>
    )
}

export default Home ;