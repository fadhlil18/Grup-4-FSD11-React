import React, { useState } from 'react';
import Icon from './image/Telkom.png';
import html from './image/html.png';
import css from './image/css.png';
import js from './image/javascript.png';
import nodejs from './image/nodejs.png';
import react from './image/react.png';
import git from './image/git.png';

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-t-lg focus:outline-none ${isActive ? 'bg-gray-900 text-white' : 'bg-gray-200 bg-opacity-50 text-white opacity-75 hover:opacity-100'
        }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="p-4 min-h-[470px]">
      <div className="flex flex-wrap">
        <Tab label="Skills" isActive={activeTab === 1} onClick={() => handleTabClick(1)} />
        <Tab label="Education" isActive={activeTab === 2} onClick={() => handleTabClick(2)} />
        <Tab label="Project Experience" isActive={activeTab === 3} onClick={() => handleTabClick(3)} />
      </div>
      <div id="Skills" className="bg-gray-800 bg-opacity-50 p-4 mt-2 rounded-b-lg">
        {activeTab === 1 && (
          <div className="flex flex-wrap md:justify-between items-center">
            <div className="flex items-center flex-wrap">
              <ul>
                <li>● HTML CSS</li>
                <li>● Javascript</li>
                <li>● ReactJS</li>
                <li>● Git</li>
                <li>● NodeJS</li>
                <li>● ReactNative</li>
              </ul>
            </div>
            <div className="flex flex-wrap items-center">
              <img src={html} alt="html" className="h-16 ml-4" />
              <img src={css} alt="css" className="h-16 ml-4" />
              <img src={js} alt="js" className="h-16 ml-4" />
              <img src={react} alt="react" className="h-16 ml-4" />
              <img src={git} alt="git" className="h-16 ml-4" />
              <img src={nodejs} alt="nodejs" className="h-16 ml-4" />
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="education-content flex items-center">
            <div>
              <div>
                <span className="font-bold">Telkom University</span> (2018 - 2022)
              </div>
              <div>Bachelor Degree of Computer Engineering with 3.44 GPA</div>
              <div>My Thesis is Infected Person Behavior Design in Doctor Vs Virus Game Using Intelligent Agent</div>
            </div>
            <img src={Icon} alt="Telkom" className="w-16 h-16 ml-4" />
          </div>
        )}
        {activeTab === 3 &&
          <div>
            <div >
              <h2 className='font-bold text-lg'>React Web Application – Bootcamp Group Project</h2>
              <h3 className='text-sm'>Full Stack Developer</h3>
              <p className='text-sm'>- Cloned Airbnb Website using React and Tailwind</p>
            </div>
            <div className='pt-2'>
              <h2 className='font-bold text-lg'>Web Project- Dicoding Final Project</h2>
              <h3 className='text-sm'>Front-End Web Developer</h3>
              <p className='text-sm'>- Developed a popular games website using HTML, CSS and Javascript</p>
              <p className='text-sm'>- Created a popular games responsive website for final project</p>
            </div>
            <div className='pt-2'>
              <h2 className='font-bold text-lg'>Game Application – Collage Thesis Project</h2>
              <h3 className='text-sm'>Game Developer</h3>
              <p className='text-sm'>- Developed Game App using Game Maker Studio</p>
              <p className='text-sm'>- Created UI and assets for this Game Project</p>
              <p className='text-sm'>- Developed AI using Intelligent Agent</p>
            </div>
            <div className='pt-2'>
              <h2 className='font-bold text-lg'>Mobile Application – Collage Group Project</h2>
              <h3 className='text-sm'>Front-End Mobile Developer</h3>
              <p className='text-sm'>- Developed Mobile App using React Native and integrated to Firebase</p>
            </div>

          </div>
        }
      </div>
    </div>
  );
};

export default App;
