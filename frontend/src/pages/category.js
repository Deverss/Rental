import React, {useState} from 'react';
import Category from '../components/Category';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import Footer from '../components/Footer';
const Categories = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Category />    
        <Footer />  
        </>
    )
}

export default Categories
