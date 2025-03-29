import PropTypes from 'prop-types';
import { useState } from 'react';

const ServiceCard = ({ title, color, width, height, description }) => {
  const [isHovered, setIsHovered] = useState(false); 

  return (
    <div
      className={`flex flex-col items-center justify-center px-6 py-3 w-[${width}] h-[${height}] md:rounded-full ${color} text-black font-courier text-[24px] font-bold shadow-lg transition-all transition-duration: 1000ms`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center">
        {title}
      </div>
      {/* Show the description on hover inside the card */}
      {isHovered && (
        <div className="text-center text-sm mt-2">
          {description}
        </div>
      )}
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string,
  description: PropTypes.string.isRequired,
};

const Services = () => {
  return (
    <div className="bg-gradient-to-b from-[#0f0f0f] via-[#362134] to-[#181a22] md:pt-[90px] pt-[50px] md:pb-[0] pb-[50px]">
      <div className="flex flex-row justify-left items-left pl-[20px] md:pl-[150px]">
        <h2 className="text-white md:text-[50px] text-[24px] font-bold font-courier mt-50 text-left">Our Services</h2>
      </div>

      <div className="md:min-h-screen flex flex-row justify-center items-center md:p-6 py-3">
        <div className="relative w-full flex-col md:flex-row flex justify-center items-center">
          {/* Circular Lines */}
          <img 
            src="/src/assets/Frame cov.png" 
            alt="circle" 
            className="absolute border-none hidden md:flex" 
          />

          {/* Service Cards */}
          <div className="relative md:absolute mb-5 md:top-[40px] left-[0] md:left-[300px] max-w-[300px] md:max-w-[100%]">
            <ServiceCard
              title="Mobile App Development"
              color="bg-[#71FBF7]"
              description="Tailored software solution to automate, optimize, and innovate."
            />
          </div>
          <div className="relative md:absolute mb-5 md:bottom-[200px] left-[0] md:left-[230px] max-w-[300px] md:max-w-[100%]">
            <ServiceCard 
              title="Custom Software Development" 
              color="bg-[#C837AB]" 
              description="Tailored software solution to automate, optimize, and innovate."
            />
          </div>
          <div className="web-development relative md:absolute left-[0] md:left-[600px] lg:left-[900px] md:bottom-[50px] max-w[300px] md:max-w-[100%]">
            <ServiceCard 
              title="Web Development" 
              color="bg-[#FEBABB]" 
              description="Tailored software solution to automate, optimize, and innovate."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
