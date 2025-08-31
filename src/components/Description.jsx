import React, { useEffect, useRef, useState } from 'react';

const Description = () => {
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
      <div className="w-full max-w-4xl rounded-2xl overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          ref={sliderRef}
        >
          <img
            src="https://w0.peakpx.com/wallpaper/525/618/HD-wallpaper-things-to-do-in-kathmandu-nepal-kathmandu-food-travel-guide-vogue-india-nepali-temple.jpg"
            className="w-full flex-shrink-0"
            alt="Slide 1"
          />
          <img
            src="https://wallpapers.com/images/featured/nepal-684cyeq8t5f8csf9.jpg"
            className="w-full flex-shrink-0"
            alt="Slide 2"
          />
          <img
            src="https://t3.ftcdn.net/jpg/06/27/13/86/360_F_627138628_WaWcYdYmeOdFlSnkUQP61eY4BzBkSbjI.jpg"
            className="w-full flex-shrink-0"
            alt="Slide 3"
          />
          <img
            src="https://luxuryholidaynepal.com/_next/image?url=https%3A%2F%2Fapi.luxuryholidaynepal.com%2Fmedia%2Fblog%2Fbanner%2Fglacial-lakes-of-nepal.jpg&w=1920&q=75"
            className="w-full flex-shrink-0"
            alt="Slide 4"
          />
          <img
            src="https://republicaimg.nagariknewscdn.com/shared/web/uploads/media/lfWPxSZhrvZsS0h0Ibn5iB9V8PFM6cjQWVEFcc6s.jpg"
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
<p> <b>Nepal – The Land of the Himalayas</b><br />

Welcome to Nepal, a land of breathtaking mountains, rich culture, and warm hospitality. From the towering peaks of the Himalayas to the lush jungles of the Terai, Nepal offers experiences that stay in your heart forever.

Whether you are trekking through remote villages, exploring UNESCO World Heritage sites in Kathmandu Valley, or seeking peace in the birthplace of Lord Buddha, Nepal has something for every traveler.</p><hr/>
    </div>

);
};

export default Description;
