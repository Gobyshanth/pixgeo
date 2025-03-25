import PropTypes from 'prop-types';

const ServiceCard = ({ title, color, width }) => {
  return (
    <div
      className={`flex items-center justify-between px-6 py-3 w-[${width}] h-[100px] rounded-full ${color} text-black font-courier text-[24px] font-bold shadow-lg`}
    >
      {title}
      <div className="w-[54px] h-[54px] bg-black flex items-center justify-center rounded-full">
        <span className="text-white text-bold text-lg">→</span>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  width: PropTypes.string
};

const Services = () => {
  return (
    <div className=" bg-gradient-to-b from-[#0f0f0f] via-[#362134] to-[#181a22]">
      <div className="flex flex-row justify-left items-left pl-[150px] pt-[90px]"> <h2 className="text-white text-[50px] font-bold font-courier mt-50 text-left">Our Services</h2></div>
  
   <div className="min-h-screen flex flex-row justify-center items-center  p-6">
      <div className="relative w-full flex justify-center items-center">
        {/* Circular Lines */}
        <img 
          src="/src/assets/Frame cov.png" 
          alt="circle" 
          className="absolute w-100 h-100 border-none" 
        />

        {/* Service Cards */}
        <div className="absolute top-[40px] left-[300px] w-[446px]">
          <ServiceCard
            title=" Mobile App Development"
            color="bg-[#71FBF7]"
          />
        </div>
        <div className="absolute bottom-[200px] left-[230px] w-[516px]">
          <ServiceCard title="Custom Software Development" color="bg-[#C837AB]"  />
        </div>
        <div className="absolute right-[100px] bottom-[50px] w-[363px]">
          <ServiceCard title="Web Development" color="bg-[#FEBABB]" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
