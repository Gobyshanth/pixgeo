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
        <div className="bg-[url('/src/assets/Homepage-Background.png')] bg-cover bg-center h-screen">
          <div className="bg-custom-gradient bg-cover bg-center h-screen flex items-end justify-center py-[50px] ">
            <div className="relative flex items-center w-[1172px] h-[260px] text-center rounded-[32px] bg-black12 backdrop-blur-[25px]">
              <h1 className="text-white font-courier font-bold text-[50px] md:text-[90px]">
                Empowering Tomorrow with Technology
              </h1>
          </div>
          </div>
        </div>
      </section>

      <div className="flex bg-custom-start items-center justify-center py-[150px]">

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

      <section className="overflow-hidden bg-black h-[150px] flex items-center justify-center">
      <div className="slider flex justify-between w-full transition-transform duration-500 ease-linear animate-slide md:animate-none">
        <div className="flex flex-col items-center justify-center text-icon-text px-[40px]">
          <SiFlutter className="w-10 h-10" />
          <div className="pt-[17px]">
            <span className="font-courier text-[20px]">Flutter</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-icon-text px-[40px]">
          <FaReact className="w-10 h-10" />
          <div className="pt-[17px]">
            <span className="flex font-courier text-[20px]">React Js</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-icon-text px-[40px]">
          <DiDotnet className="icon w-10 h-10" />
          <div className="pt-[17px]">
            <span className="font-courier text-[20px]">.Net</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-icon-text px-[40px]">
          <FaFigma className="w-[26px] h-[40px] text-[#565656]" />
          <div className="pt-[25px]">
            <span className="font-courier text-[20px]">Figma</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-icon-text px-[40px]">
          <FaAws className="icon w-10 h-10" />
          <div className="pt-[17px]">
            <span className="font-courier text-[20px]">AWS</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-icon-text px-[40px]">
          <TbDatabaseSearch className="icon w-10 h-10" />
          <div className="pt-[17px]">
            <span className="font-courier text-[20px]">SQL</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-icon-text px-[40px]">
          <TbBrandAzure className="icon w-10 h-10" />
          <div className="pt-[17px]">
            <span className="font-courier text-[20px]">Azure</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-icon-text px-[40px]">
          <SiNodedotjs className="icon w-10 h-10" />
          <div className="pt-[17px]">
            <span className="font-courier text-[20px]">Node Js</span>
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
