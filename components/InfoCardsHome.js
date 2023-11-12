import React from 'react';
import InfoCard from './InfoCard';

const InfoCardsHome = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-4 mb-16 mx-8">
      <InfoCard 
        title="What is Stateforward?" 
        text="StateForward is a cutting-edge library designed to streamline complex state management, making it simpler and more efficient." 
      />
      <InfoCard 
        title="Why is it needed?" 
        text="It addresses the challenges of managing complex state changes in modern applications, offering a structured and maintainable approach." 
      />
      <InfoCard 
        title="What kind of license?" 
        text="StateForward is released under the MIT license, offering flexibility and freedom for both personal and commercial use." 
      />
    </div>
  );
};

export default React.memo(InfoCardsHome);
