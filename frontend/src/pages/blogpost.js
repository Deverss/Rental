import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Post from '../components/BlogPost';
import Footer from '../components/Footer';

const BlogPost = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />  
        <Post />    
        <Footer />
        </>
    )
}

export default BlogPost;