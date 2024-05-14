import React from 'react';
import Slideshow from '../components/Atoms/ImageSlider';
import data from '../assets/image/Projects.json';

const Project = () => {
  return (
    <div className='relative'>
      <h2 className="text-3xl font-bold mb-8 mt-4 text-center">My Projects</h2>
      <div id="Project" className="flex flex-col lg:flex-row items-center justify-center mb-12 max-w-7xl mx-auto">
        {data.map(item => {
          return (
            <div key={item.id} className="m-4">
              <div>
                <Slideshow data={item.picture} className="flex-col lg:flex-row items-center justify-center mb-12 max-w-7xl mx-auto"/>
                <div className="text-center mt-2 font-bold">{item.name}</div>
                <div className="text-center">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
