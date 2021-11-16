import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import AdvancedSearch from '../components/AdvancedSearch';
import Footer from '../components/Footer';

const Search = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />  
        <AdvancedSearch />   
        <Footer />
        </>
    )
}

export default Search;