import React from 'react';
import ShapeDivider from './ShapeDivider';

const ElevatorPitch: React.FC = () => {
  return (
    <section id="elevator-pitch" className="py-16 bg-gradient-to-b from-gray-100 to-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10">Elevator Pitch</h2>
        
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-xl">
          <div className="aspect-w-16 aspect-h-9">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/Yqm78wcvJZY" 
              title="Elevator Pitch | Yassine Erradouani" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      <ShapeDivider position="bottom" />
    </section>
  );
};

export default ElevatorPitch;