import { FaReact, FaFigma, FaAws } from "react-icons/fa";
import { SiFlutter, SiNodedotjs } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { TbDatabaseSearch, TbBrandAzure } from "react-icons/tb";

import Location from "../Location/Location";
import { OurExpertise } from "../OurExpertise/OurExpertise";
import WhyWorkWithUs from "../WhyWorkWithUs/WhyWorkWithUs";

export const Home = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section>
        <div className="bg-[url('../../../public/assets/Homepage-Background.png')] bg-blur-custom bg-cover bg-center h-auto md:h-screen">
          <div className="bg-custom-gradient bg-cover bg-center h-[400px] md:h-screen flex items-end justify-center py-[50px]">
            <div className="relative flex items-center md:w-[1172px] md:h-[260px] text-center rounded-[32px] bg-black12 backdrop-blur-[25px] mx-5 md:mx-0">
              <h1 className="text-white font-courier font-bold text-[30px] md:text-[50px] lg:text-[90px] px-10 py-5">
                Empowering Tomorrow with Technology
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Transforming Ideas Section */}
      <div className="flex bg-custom-mstart md:bg-custom-start items-center justify-center py-[50px] md:pt-[50px] md:pb-[0px]">
        <section className="p-10 md:p-15 text-white flex flex-col items-center justify-center border border-[#6E6E6E] rounded-[32px] mx-4 md:mx-0">
          <div>
            <h2 className="font-courier font-bold text-[25px] md:text-[50px] text-center">
              Transforming Ideas into Digital
              <span className="block text-center">solutions...</span>
            </h2>
          </div>

          <div className="pb-5 text-[16px] font-courier text-gray-400 text-center mt-4">
            We specialize in custom websites, mobile apps, and software
            development to help businesses innovate and grow.
          </div>

          <button className="bg-black text-white w-full md:w-[255px] h-[56px] px-4 py-2 rounded-2xl border-2 border-[#E959D8] hover:bg-[#E959D8] mt-6">
            Get Started Today
          </button>
        </section>
      </div>

      {/* Our Expertise Section */}
      <OurExpertise />

      {/* Technologies Slider Section */}
      <section className="overflow-hidden bg-black h-[150px] flex items-center justify-center">
        <div className="slider flex justify-center w-full transition-transform duration-500 ease-linear animate-slide md:animate-none">
          {[
            { icon: <SiFlutter className="w-10 h-10" />, text: "Flutter" },
            { icon: <FaReact className="w-10 h-10" />, text: "React Js" },
            { icon: <DiDotnet className="w-10 h-10" />, text: ".Net" },
            { icon: <FaFigma className="w-[26px] h-[40px]" />, text: "Figma" },
            { icon: <FaAws className="w-10 h-10" />, text: "AWS" },
            { icon: <TbDatabaseSearch className="w-10 h-10" />, text: "SQL" },
            { icon: <TbBrandAzure className="w-10 h-10" />, text: "Azure" },
            { icon: <SiNodedotjs className="w-10 h-10" />, text: "Node Js" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-icon-text px-[20px] md:px-[40px]">
              {item.icon}
              <div className="pt-[17px]">
                <span className="font-courier text-[16px] md:text-[20px]">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Work With Us Section */}
      <WhyWorkWithUs />

      {/* Location Section */}
      <section>
        <Location />
      </section>
    </div>
  );
};