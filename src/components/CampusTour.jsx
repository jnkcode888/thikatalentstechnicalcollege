import React from 'react';
import { Link } from 'react-router-dom';

const CampusTour = () => {
  const facilities = [
    {
      title: "Virtual Reality Lab",
      description: "Experience immersive learning in our cutting-edge VR environment.",
      image: "https://readdy.ai/api/search-image?query=futuristic%2520virtual%2520reality%2520lab%2520with%2520students%2520wearing%2520VR%2520headsets%252C%2520blue%2520glowing%2520technology%252C%2520modern%2520equipment%252C%2520glass%2520walls%252C%2520holographic%2520displays%252C%2520high-tech%2520learning%2520environment%252C%2520clean%2520design&width=800&height=600&seq=vr&orientation=landscape"
    },
    {
      title: "Innovation Hub",
      description: "Collaborate and create in our open-concept innovation workspace.",
      image: "https://readdy.ai/api/search-image?query=futuristic%2520innovation%2520hub%2520with%2520students%2520collaborating%252C%2520glass%2520walls%252C%2520modern%2520furniture%252C%2520digital%2520screens%252C%2520interactive%2520displays%252C%2520bright%2520open%2520space%252C%2520high-tech%2520collaborative%2520environment%252C%2520clean%2520design&width=800&height=600&seq=hub&orientation=landscape"
    },
    {
      title: "Robotics Workshop",
      description: "Build and program robots in our specialized engineering facility.",
      image: "https://readdy.ai/api/search-image?query=futuristic%2520robotics%2520workshop%2520with%2520students%2520working%2520on%2520robots%252C%2520high-tech%2520equipment%252C%2520robotic%2520arms%252C%2520digital%2520displays%252C%2520modern%2520tools%252C%2520clean%2520organized%2520space%252C%2520blue%2520lighting%2520accents&width=800&height=600&seq=robot&orientation=landscape"
    },
    {
      title: "Digital Design Studio",
      description: "Create stunning designs with industry-standard software and equipment.",
      image: "https://readdy.ai/api/search-image?query=futuristic%2520digital%2520design%2520studio%2520with%2520students%2520working%2520on%2520large%2520screens%252C%25203D%2520modeling%252C%2520digital%2520art%252C%2520modern%2520computers%252C%2520creative%2520workspace%252C%2520artistic%2520environment%252C%2520clean%2520design%2520with%2520blue%2520accents&width=800&height=600&seq=design&orientation=landscape"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Explore Our Campus</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Take a virtual tour of our state-of-the-art facilities designed for immersive, future-focused learning.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((facility, index) => (
            <div key={index} className="rounded-lg overflow-hidden h-96 relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{facility.title}</h3>
                  <p>{facility.description}</p>
                </div>
              </div>
              <div 
                className="w-full h-full transition-transform duration-500 group-hover:scale-110" 
                style={{
                  backgroundImage: `url(${facility.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/tour" className="glow-button bg-gradient-to-r from-primary to-blue-500 text-white px-8 py-3 !rounded-button font-medium whitespace-nowrap inline-block">
            Schedule a Campus Visit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampusTour; 