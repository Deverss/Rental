import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer'
const Works  = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />  
        <HowItWorks />    
        <Footer />
        </>
    )
}

export default Works;