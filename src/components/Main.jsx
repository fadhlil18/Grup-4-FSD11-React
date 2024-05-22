import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Me from "../assets/image/me.png";
import CV from "../assets/CV.pdf";
import "../assets/styles/main.css";

const Main = () => {
    return (
        <div id='Home'className="relative flex flex-col-reverse md:flex-row justify-center items-center mx-16 my-12 gap-8 h-screen"> {/* Set height to full screen */}
            <div className="flex flex-col items-center md:items-start"> {/* Center content on small screens, align left on medium and above */}
                <div className="name">
                    <div>
                        <TypeAnimation
                            sequence={[
                                "Hello, I'm Fadhlil AF",
                                1000,
                                "Hello, I'm Web Developer",
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            className="font-bold text-xl md:text-4xl lg:text-6xl mb-4 test"
                            repeat={Infinity}
                        />
                    </div>
                    <p>I am a bachelor's degree holder in Computer Engineering from Telkom University. Experienced as a Front-End Developer.</p>
                    <a href={CV} target="_blank" rel="noopener noreferrer"> {/* Open CV in a new tab */}
                        <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"> {/* Added margin top */}
                            Download CV
                        </button>
                    </a>
                </div>
            </div>
            <div className="flex justify-center md:justify-start mt-4 md:mt-0"> {/* Align image to the left on medium and above */}
                <img src={Me} alt="me" className="w-[250px] md:ml-8" />
            </div>
        </div>
    );
};

export default Main;
