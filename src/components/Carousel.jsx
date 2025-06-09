// components/Carousel.jsx
import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "/assets/village1.jpg",
    title: "Entrance to The Village",
    description: "Welcome to The Village Restaurant, where tradition meets taste.",
  },
  {
    id: 2,
    image: "assets/village2.jpg",
    title: "Open Lawn Dining",
    description: "Enjoy our spacious open lawn dining area, perfect for gatherings.",
  },
  {
    id: 3,
    image: "assets/village3.jpg",
    title: "Party With Friends",
    description: "Celebrate special moments with friends at The Village.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
 
  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <section className="max-w-8xl mx-auto mt-0">
      <div className="relative overflow-hidden rounded-sm shadow-lg">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-full h-full object-cover"/>

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white">
          <h2 className="text-xl font-bold">{slides[currentIndex].title}</h2>
          <p>{slides[currentIndex].description}</p>
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-white" : "bg-gray-400"
                }`}
                ></button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
