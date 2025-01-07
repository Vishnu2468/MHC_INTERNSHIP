import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to Our Presentation",
      subtitle: "Q4 2024 Business Review",
      content: [
        "Annual Growth Overview",
        "Key Achievements",
        "Future Roadmap"
      ]
    },
    {
      title: "2024 Performance Highlights",
      content: [
        "Revenue increased by 45%",
        "Expanded to 3 new markets",
        "Customer satisfaction rate: 94%",
        "Launched 5 new products"
      ]
    },
    {
      title: "Market Analysis",
      content: [
        "Market share grew to 23%",
        "Competitor landscape overview",
        "Emerging opportunities",
        "Risk assessment"
      ]
    },
    {
      title: "2025 Strategic Goals",
      content: [
        "Enter 2 new international markets",
        "Launch premium product line",
        "Achieve 50% revenue growth",
        "Expand team by 40%"
      ]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Slide Content */}
        <div className="min-h-[600px] p-12 relative">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gray-200">
            <div 
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>

          {/* Slide Number */}
          <div className="absolute top-4 right-4 text-gray-500">
            {currentSlide + 1} / {slides.length}
          </div>

          {/* Main Content */}
          <div className="pt-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              {slides[currentSlide].title}
            </h1>
            
            {slides[currentSlide].subtitle && (
              <h2 className="text-2xl text-gray-600 mb-8">
                {slides[currentSlide].subtitle}
              </h2>
            )}

            <ul className="space-y-6 mt-12">
              {slides[currentSlide].content.map((item, index) => (
                <li 
                  key={index}
                  className="flex items-center text-xl text-gray-700"
                >
                  <span className="w-4 h-4 rounded-full bg-blue-500 mr-4" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-between px-8">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentSlide === index ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;