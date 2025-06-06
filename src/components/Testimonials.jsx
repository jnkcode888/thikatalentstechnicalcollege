import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  const testimonials = [
    {
      name: "Michael Odhiambo",
      role: "Software Engineer at Microsoft",
      image: "https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520a%2520young%2520African%2520man%2520in%2520business%2520attire%252C%2520smiling%2520confidently%2520at%2520camera%252C%2520clean%2520background%252C%2520high%2520quality%2520professional%2520headshot%252C%2520well-lit%252C%2520modern%2520style&width=200&height=200&seq=test1&orientation=squarish",
      text: "The immersive learning environment at Thika Talents completely transformed my understanding of software development. The AI-enhanced courses adapted to my learning style, and the industry partnerships gave me real-world experience that helped me land my dream job at Microsoft.",
      rating: 5
    },
    {
      name: "Amina Wanjiku",
      role: "Robotics Engineer at Tesla",
      image: "https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520a%2520young%2520African%2520woman%2520with%2520natural%2520hair%252C%2520wearing%2520professional%2520attire%252C%2520smiling%2520confidently%2520at%2520camera%252C%2520clean%2520background%252C%2520high%2520quality%2520professional%2520headshot%252C%2520well-lit%252C%2520modern%2520style&width=200&height=200&seq=test2&orientation=squarish",
      text: "The engineering program at Thika Talents provided me with hands-on experience using cutting-edge technology. The VR labs allowed me to practice complex robotics concepts in a safe environment, giving me skills that set me apart from other candidates when applying to Tesla.",
      rating: 5
    },
    {
      name: "Daniel Kamau",
      role: "Fashion Designer at Vogue",
      image: "https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520a%2520young%2520African%2520man%2520with%2520glasses%252C%2520wearing%2520business%2520casual%2520attire%252C%2520smiling%2520confidently%2520at%2520camera%252C%2520clean%2520background%252C%2520high%2520quality%2520professional%2520headshot%252C%2520well-lit%252C%2520modern%2520style&width=200&height=200&seq=test3&orientation=squarish",
      text: "The fashion design program at Thika Talents combines traditional techniques with cutting-edge technology. I learned 3D modeling and digital fabric simulation alongside classic design principles, giving me a competitive edge in the fashion industry that led to my position at Vogue.",
      rating: 4.5
    }
  ];

  useEffect(() => {
    const updateCarouselSize = () => {
      const testimonials = document.querySelectorAll('.testimonial-card');
      if (testimonials.length > 0) {
        if (window.innerWidth >= 1024) { // lg
          setSlideWidth(testimonials[0].offsetWidth + 32);
          setMaxIndex(testimonials.length - 3);
        } else if (window.innerWidth >= 768) { // md
          setSlideWidth(testimonials[0].offsetWidth + 32);
          setMaxIndex(testimonials.length - 2);
        } else { // sm
          setSlideWidth(testimonials[0].offsetWidth + 32);
          setMaxIndex(testimonials.length - 1);
        }
      }
    };

    window.addEventListener('resize', updateCarouselSize);
    updateCarouselSize();

    return () => window.removeEventListener('resize', updateCarouselSize);
  }, []);

  useEffect(() => {
    const autoSlideInterval = setInterval(() => {
      if (currentIndex < maxIndex) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 5000);

    return () => clearInterval(autoSlideInterval);
  }, [currentIndex, maxIndex]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Student Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Hear from our graduates who have transformed their careers through our innovative programs.</p>
        </div>
        
        <div className="relative">
          <div 
            id="testimonial-carousel" 
            className="flex overflow-x-hidden transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card glassmorphism rounded-lg p-8 mx-4 min-w-full md:min-w-[calc(50%-2rem)] lg:min-w-[calc(33.333%-2rem)] flex flex-col">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-secondary">
                    <div 
                      className="w-full h-full bg-gray-200" 
                      style={{ 
                        backgroundImage: `url(${testimonial.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    ></div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mb-6 flex-1">
                  <p className="text-gray-600 italic">{testimonial.text}</p>
                </div>
                <div className="flex">
                  <div className="text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`ri-star-${i < Math.floor(testimonial.rating) ? 'fill' : i < testimonial.rating ? 'half-fill' : 'line'}`}
                      ></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-lg z-10"
          >
            <i className="ri-arrow-left-s-line text-primary"></i>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-lg z-10"
          >
            <i className="ri-arrow-right-s-line text-primary"></i>
          </button>
        </div>
        
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}
                data-index={index}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 