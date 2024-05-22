import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-gray-800 bg-opacity-50 text-white">
      <div className="container mx-auto py-8 flex flex-col md:flex-row">
        <div className="md:w-1/3 md:pr-8">
          <h5 className="text-lg font-semibold mb-4">Let's Connect</h5>
          <p>I'm currently looking for new opportunities, my inbox is always open.</p>
        </div>
        <div className="md:w-1/3 md:px-8 mt-4 md:mt-0">
          <h5 className="text-lg font-semibold mb-4">Contact Me</h5>
          <ul>
            <li>Email   : fadhlilazfi@gmail.com</li>
            <li>Phone   : (+62) 823-2444-4770</li>
            <li>Discord : razh18 | arata#2356</li>
            <li>Address : Banten, Indonesia</li>
          </ul>
        </div>
        <div className="md:w-1/3 md:pl-8">
          <h5 className="text-lg font-semibold mb-4">Social Media</h5>
          <ul className="flex flex-wrap">
            <li className="mr-4 mb-2"><a href="https://www.linkedin.com/in/fadhlilazfi/" target="_blank" className="hover:font-semibold"><i className="fab fa-linkedin-in"></i><span  className='ml-1'>Linkedin</span></a></li>
            <li className="mr-4 mb-2"><a href="https://github.com/fadhlil18" target="_blank" className="hover:font-semibold"><i className="fab fa-github"></i><span className='ml-1'>Github</span></a></li>
            <li className="mr-4 mb-2"><a href="https://www.instagram.com/azhim18/" target="_blank" className="hover:font-semibold"><i className="fab fa-instagram"></i><span  className='ml-1'>Instagram</span></a></li>
            <li className="mr-4 mb-2"><a href="https://www.facebook.com/fadhlilazhimfirmansyah" target="_blank" className="hover:font-semibold"><i className="fab fa-facebook-f"></i><span className='ml-1'>Facebook</span></a></li>
            <li className="mr-4 mb-2"><a href="https://www.youtube.com/@fadhlilaf" target="_blank" className="hover:font-semibold"><i className="fab fa-youtube"></i><span>Youtube</span></a></li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-700 bg-opacity-50 py-2">
        <div className="container mx-auto">
          <p className="text-center">&copy;{new Date().getFullYear()} Fadhlil Azhim Firmansyah. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
