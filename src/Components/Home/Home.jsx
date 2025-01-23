
import { FaReact, FaFigma, FaAws } from "react-icons/fa";
import { SiFlutter, SiNodedotjs } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { TbDatabaseSearch } from "react-icons/tb";
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
        <div className="flex mb-[30px] mt-[50px] h-150 items-center justify-center bg-black">
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
            <h2>Why work with us?</h2>
            <span className="text-2xl">AZYRE</span>
          </div>
          <div className="pr-[40px]  flex flex-col items-center text-center ">
            <SiNodedotjs className="w-[50px] h-[50px]" />
            <span className="text-2xl">Node Js</span>
          </div>

          <div className="content"></div>
        </div>
      </section>

     <WhyWorkWithUs/>

      <section>
        <Location />
      </section>
    </div>
  );
};
