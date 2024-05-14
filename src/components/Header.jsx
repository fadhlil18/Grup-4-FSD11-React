import React, { useState } from 'react';

const Navbar = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');

    const toggleNavbar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <nav className="bg-white bg-opacity-50 fixed border-gray-200 dark:bg-gray-900 dark:bg-opacity-50 top-0 w-full z-50">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">AZH Project</span>
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isExpanded}
                    onClick={toggleNavbar}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isExpanded ? '' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:bg-transparent md:dark:bg-transparent dark:border-gray-700 dark:bg-opacity-50">
                        <li>
                            <a
                                href="#Home"
                                className={`block py-2 px-3 text-gray-900 bg-opacity-50 rounded ${activeLink === 'Home' ? 'font-bold' : ''} hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                                onClick={() => setActiveLink('Home')}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#About"
                                className={`block py-2 px-3 text-gray-900 bg-opacity-50 rounded ${activeLink === 'About' ? 'font-bold' : ''} hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                                onClick={() => setActiveLink('About')}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#Project"
                                className={`block py-2 px-3 text-gray-900 bg-opacity-50 rounded ${activeLink === 'Project' ? 'font-bold' : ''} hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
                                onClick={() => setActiveLink('Project')}
                            >
                                Project
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
