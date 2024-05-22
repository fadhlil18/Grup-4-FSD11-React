import React from 'react';
import Programmer from '../assets/image/Programmer.png';
import Skills from './Atoms/Skills';

const AboutMe = () => {
    return (
        
        <div id='About' className='relative tester flex flex-col lg:flex-row justify-center items-center mx-auto my-16 max-w-6xl'>
            <img src={Programmer} alt="Programmer" className='w-[250px] sm:w-[350px] md:w-[420px] mb-8 md:mb-2 md:mr-8' />
            <div>
                <div className='mx-6'>
                    <h1 className='text-4xl'>About Me</h1>
                    <p className='text-justify'>I am experienced as a Front-End Developer with HTML, CSS, Tailwind, JavaScript, and React. Currently studying in a bootcamp program to deepen my skills in Web Development. I am a detail-oriented individual who is eager for a full-time opportunity in Front End Web Development.</p>
                </div>
                <Skills />
            </div>
        </div>
    );
};

export default AboutMe;
