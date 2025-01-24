import {  FaMobileAlt } from "react-icons/fa"; // Example icons

 const OurExpertise = () => {
  return (
    <div className="w-[80%] flex items-center justify-center mx-auto">
      <section>
        <div className="bg-black-200 flex items-center ">
          <h2 className="text-white text-4xl font-bold pt-20 pr-8 pb-10 pl-[10px]">
            Our Expertise
          </h2>
        </div>
        <div className="home-page-expertise">
          <div className="expertise-developments flex justify-center">
          <div className="web-developments flex flex-col items-center text-center">
              <div className="icon text-4xl text-green-500 flex items-center justify-center p-[40px] text-[50px]">
                <FaMobileAlt />
              </div>
              <div className="title">
                <h2>Mobile App Developments</h2>
              </div>
              <div className="content">
                <p>Innovative iOS and Android apps that engage users and drive growth</p>
              </div>
            </div>
            <div className="web-developments flex flex-col items-center text-center">
              <div className="icon text-4xl text-green-500 flex items-center justify-center p-[40px] text-[50px]">
                <FaMobileAlt />
              </div>
              <div className="title">
                <h2>Mobile App Developments</h2>
              </div>
              <div className="content">
                <p>Innovative iOS and Android apps that engage users and drive growth</p>
              </div>
            </div>

            <div className="web-developments flex flex-col items-center text-center">
              <div className="icon text-4xl text-green-500 flex items-center justify-center p-[40px] text-[50px]">
                <FaMobileAlt />
              </div>
              <div className="title">
                <h2>Mobile App Developments</h2>
              </div>
              <div className="content">
                <p>Innovative iOS and Android apps that engage users and drive growth</p>
              </div>
            </div>

            <div className="web-developments flex flex-col items-center text-center">
              <div className="icon text-4xl text-green-500 flex items-center justify-center p-[40px] text-[50px]">
                <FaMobileAlt />
              </div>
              <div className="title">
                <h2>Mobile App Developments</h2>
              </div>
              <div className="content">
                <p>Innovative iOS and Android apps that engage users and drive growth</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default OurExpertise