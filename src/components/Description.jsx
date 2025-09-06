import React, { useEffect, useRef, useState } from 'react';

const Description = (props) => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // number of slides

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Update slider position whenever currentSlide changes
  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const slideWidth = slider.clientWidth;
      slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  }, [currentSlide]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full   rounded-2xl overflow-hidden relative object-fill">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          ref={sliderRef}
        >
            {/* passing images using props */}
          <img
            src={props.image1}
            className="w-full flex-shrink-0"
            alt="Slide 1"
          />
          <img
            src={props.image2}
            className="w-full flex-shrink-0"
            alt="Slide 2"
          />
          <img
            src={props.image3}
            className="w-full flex-shrink-0"
            alt="Slide 3"
          />
          <img
            src={props.image4}
            alt="Slide 4"
          />
          <img
            src={props.image5}
            className="w-full flex-shrink-0"
            alt="Slide 5"
          />
        </div>
      </div>
      <div className="flex items-center mt-5 space-x-2">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-black' : 'bg-black/20'
            }`}
          ></span>
        ))}
      </div>
      {/* passing prorps place name and decription */}
<p> <b>{props.placename}</b><br />
{props.placedescription}.</p><hr/>
    </div>

);
};

export default Description;
