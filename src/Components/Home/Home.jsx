import { FaReact, FaFigma, FaAws } from "react-icons/fa";
import { SiFlutter, SiNodedotjs } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { TbDatabaseSearch, TbBrandAzure } from "react-icons/tb";
import "./Style.css";

import Location from "../Location/Location";
import { OurExpertise } from "../OurExpertise/OurExpertise";
import WhyWorkWithUs from "../WhyWorkWithUs/WhyWorkWithUs";

export const Home = () => {
  return (
    <div className="">
      <section>
        <div className="home-page-initial">
          <div className="font-courier  w-[1172px] align-center text-center bg-black/30 bg-transparent backdrop-blur-lg rounded-2xl h-[260px] mt-[450px]">
            <h1 className="pt-[30px] font-bold text-[90px]">
              Empowering Tomorrow with Technology
            </h1>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center pt-[150px]">
        {/* <div className="w-[100px] h-[100px] border-2 rounded-[100%] bg-white/30 bg-transparent backdrop-blur-xl ">

        </div> */}

        <section className="w-[1137px] h-[300px]  text-white flex flex-col items-center justify-center border border-[#6E6E6E] rounded-[32px]">
          <div className="pb-[20px]">
            <h1 className="font-courier font-bold text-[50px]">
              Transforming Ideas into Digital
              <span className="block text-center">solutions...</span>
            </h1>
          </div>

          <div className="pb-[20px] text-[16px] font-courier color-[#6E6E6E]">
            We specialize in custom websites, mobile apps, and software
            development to help businesses innovate and grow.{" "}
          </div>

          <button className="bg-black text-white w-[255px] h-[56px] px-4 py-2 rounded-2xl border-2 border-[#E959D8] hover:bg-[#E959D8]">
            Get Started Today
          </button>
        </section>
      </div>

      <OurExpertise />

      <section>
        <div className="flex mt-[50px] h-[150px] items-center justify-center bg-black">
          <div className="icon-container">
            <SiFlutter className="icon" />
            <div className="pt-[17px]">
              <span className="icon-text">Flutter</span>
            </div>
          </div>

          <div className="icon-container">
            <FaReact className="icon" />
            <div className="pt-[17px]">
              <span className="icon-text">React Js</span>
            </div>
          </div>

          <div className="icon-container">
            <DiDotnet className="icon" />
            <div className="pt-[17px]">
              <span className="icon-text">.Net</span>
            </div>
          </div>

          <div className="icon-container">
            <FaFigma className="w-[26px] h-[40px] text-[#565656]" />
            <div className="pt-[25px]">
              <span className="icon-text">Figma</span>
            </div>
          </div>

          <div className="icon-container">
            <FaAws className="icon" />
            <div className="pt-[17px]">
              <span className="icon-text">AWS</span>
            </div>
          </div>

          <div className="icon-container">
            <TbDatabaseSearch className="icon" />
            <div className="pt-[17px]">
              <span className="icon-text">SQL</span>
            </div>
          </div>

          <div className="icon-container">
            <TbBrandAzure className="icon fill-[#565656]" />
            <div className="pt-[17px]">
              <span className="icon-text">AZURE</span>
            </div>
          </div>

          <div className="icon-container">
            <SiNodedotjs className="icon" />
            <div className="pt-[17px]">
              <span className="icon-text">Node Js</span>
            </div>
          </div>
        </div>
      </section>

      <WhyWorkWithUs />

      <section>
        <Location />
      </section>
    </div>
  );
};
