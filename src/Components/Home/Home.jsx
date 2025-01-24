
import { FaReact, FaFigma, FaAws } from "react-icons/fa";
import { SiFlutter, SiNodedotjs} from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { TbDatabaseSearch } from "react-icons/tb";
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
        <div className="flex md:flex-row flex-col py-10 mt-[50px] h-150 items-center justify-center text-gray-400 font-courier bg-black">
          <div className="pr-[40px] pl-[40px]  flex flex-col items-center text-center">
            <SiFlutter className="w-[50px] h-[50px]" />
            <span className="text-2xl">Flutter</span>
          </div>

          <div className="pr-[40px] pl-[40px] flex flex-col items-center text-center ">
            <FaReact className="w-[47px] h-[42px]" />
            <span className="text-2xl">React Js</span>
          </div>
          <div className="pr-[40px] pl-[40px] flex flex-col items-center text-center ">
            <DiDotnet className="w-[50px] h-[50px]" />
            <span className="text-2xl">.Net</span>
          </div>
          <div className="pr-[40px] pl-[40px]  flex flex-col items-center text-center  ">
            <FaFigma className="w-[50px] h-[50px]" />
            <span className="text-2xl">Figma</span>
          </div>
          <div className="pr-[40px] pl-[40px]  flex flex-col items-center text-center ">
            <FaAws className="w-[50px] h-[50px]" />
            <span className="text-2xl">AWS</span>
          </div>
          <div className="pr-[40px] pl-[40px]  flex flex-col items-center text-center  ">
            <TbDatabaseSearch className="w-[50px] h-[50px]" />
            <span className="text-2xl">SQL</span>
          </div>
          <div className="pr-[40px] pl-[40px]  flex flex-col items-center text-center ">
            <bDatabaseSearch className="w-[50px] h-[50px]" />
            <span className="text-2xl">AZYRE</span>
          </div>
          <div className="pr-[40px]  flex flex-col items-center text-center ">
            <SiNodedotjs className="w-[50px] h-[50px]" />
            <span className="text-2xl">Node Js</span>
          </div>
        </div>
      </section>

     <WhyWorkWithUs/>

      <section>
        <Location />
      </section>
    </div>
  );
};
