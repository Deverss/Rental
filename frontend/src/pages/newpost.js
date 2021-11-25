import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewPost from '../components/NewPost'
const ProfileInfo  = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} /> 
        <NewPost />
        <Footer />   
        </>
    )
}

export default ProfileInfo