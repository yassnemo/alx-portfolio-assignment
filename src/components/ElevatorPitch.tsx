import React from 'react';
import ShapeDivider from './ShapeDivider';

const ElevatorPitch: React.FC = () => {
  return (
    <section id="elevator-pitch" className="py-16 bg-transparent relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">Elevator Pitch</h2>
        
        <div className="w-full lg:w-4/5 xl:w-3/4 max-w-5xl mx-auto rounded-lg overflow-hidden shadow-xl bg-white dark:bg-gray-800 transition-colors duration-300">
          {/* 16:9 aspect ratio wrapper */}
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
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