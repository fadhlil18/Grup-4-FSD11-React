import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function ImageSlider({ data }) {
    if (data.length < 2) {
        return <div><img className="rounded-lg object-cover flex justify-center bg-cover" src={data} alt={data} /></div>
    } else {
        return (
            <div className=" m-[2px] w-[350px] sm:w-[550px] md:w-[650px] lg:w-[650px]">
                <Slide autoplay={false}>
                    {data.map((each, index) => (
                        <div key={index}>
                            <a href={`${each}` } target="_blank" rel="noopener noreferrer"><img className="rounded-lg object-cover flex justify-center bg-cover" src={each} alt={`image-${index}`} /></a>
                        </div>
                    ))}
                </Slide>
            </div>
        );
    }
}

export default ImageSlider;
