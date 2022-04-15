import React, {useState, useEffect} from 'react';
import './Home.css'

// components
import ActivityList from '../components/ActivityList/ActivityList';
import Navbar from '../components/Navbar/Navbar';
import Form from '../components/Form/Form';

function Home(props){

    const [logoName, setLogoName] = useState('');

    const handleLogoName = (logoName) => {
        setLogoName(logoName);
    };

    useEffect(()=>{
        // console.log('logo fron Home page: ', logoName);
    }, [logoName])


    return (
        <section className='home'>
            <Navbar/>
            <Form handleLogoName={handleLogoName} logoName={logoName}/>
            <ActivityList   />
        </section>
    )
}

export default Home ;