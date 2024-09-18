import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';
import ProjectCard from '../ProjectCard'; // Import the ProjectCard component

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = [ ' ', 'V', 'i', 'c', 't', 'o', 'r'];
    const jobArray = ['W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>Frontend Developer / JavaScript Expert / UI/UX Designer</h2>
                <Link to="contact" className="flat-button">CONTACT ME</Link>
            </div>
            <ProjectCard 
                imageSrc="https://via.placeholder.com/300" 
                title="My Project" 
                description="This is a brief description of my project. It showcases my skills in web development."
            />
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home;
