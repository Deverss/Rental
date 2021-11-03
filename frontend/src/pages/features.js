import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import FeaturesPage from '../components/FeaturesPage';
import Footer from '../components/Footer';

const Features = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />  
        <FeaturesPage />    
        <Footer />
        </>
    )
}

export default Features;