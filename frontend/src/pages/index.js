import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

import InfoSection from '../components/InfoSection';
import Services  from '../components/Services';
import { 
    homeObjOne,
    // homeObjTwo,
    // homeObjThree,   
} from '../components/InfoSection/Data';
import CatalogSection from '../components/CatalogSection';
import Footer from '../components/Footer';
const Home  = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };


    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle} />  
         <InfoSection {...homeObjOne} />
         <Services />
         <CatalogSection />
         <Footer />
        </>
    );
};

export default Home;
