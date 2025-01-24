import { FaReact, FaFigma, FaAws } from "react-icons/fa";
import { SiFlutter, SiNodedotjs} from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { TbDatabaseSearch ,TbBrandAzure  } from "react-icons/tb";
import "./Style.css";

import Location from "../Location/Location";
import { OurExpertise } from "../OurExpertise/OurExpertise";
import WhyWorkWithUs from "../WhyWorkWithUs/WhyWorkWithUs";

export const Home = () => {
  return (
    <div className="container">
      <section>
        <div className="bg-[url('/src/assets/Homepage-Background.png')] bg-cover bg-center h-screen flex items-center ">
          <div className="relative text-center text-xl md:text-2xl text-white font-courier rounded-[32px] bg-black/12 backdrop-blur-[25px]">
            <h1 className="pt-[30px] font-bold text-[50px] md:text-[90px]">
              Empowering Tomorrow with Technology
            </h1>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-center pt-[150px]">

        <section className="p-10 md:p-15 text-white flex flex-col items-center justify-center border border-[#6E6E6E] rounded-[32px]">
          <div className="">
            <h2 className="font-courier font-bold md:text-[50px] text-[25px] text-center">
              Transforming Ideas into Digital
              <span className="block text-center">solutions...</span>
            </h2>
          </div>

          <div className="pb-5 text-[16px] font-courier text-gray-400 text-center">
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
