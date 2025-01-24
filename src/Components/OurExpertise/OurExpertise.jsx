

export const OurExpertise = () => {
  return (
    <div className="w-[75%] flex items-center justify-center mx-auto font-courier">
      <section>
        <div className="bg-black-200 flex items-center ">
          <h2 className="text-white text-4xl font-bold pt-20 pr-8 pb-10 pl-[10px]">
            Our Expertise
          </h2>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col md:flex-row justify-center text-white">
          <div className="flex flex-col items-center text-center border border-[#6E6E6E] rounded-[32px] p-10 mt-10 md:m-5 md:p-8">
              <div className="flex items-center justify-center p-[20px]">
                <img className=" w-[100px]" src="/src/assets/web.png" alt="web-development" />
              </div>
              <div className="text-center font-semibold pb-4">
                <h2>Web Developments</h2>
              </div>
              <div className="text-left">
                <p>&quot;Innovative iOS and Android apps that engage users and drive growth.&quot;</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center border border-[#6E6E6E] rounded-[32px] p-10 mt-10 md:m-5 md:p-8">
              <div className="flex items-center justify-center p-[20px]">
              <img className=" w-[100px]" src="/src/assets/mobile-app.png" alt="web-development" />
              </div>
              <div className="text-center font-semibold pb-4">
                <h2>Mobile App Developments</h2>
              </div>
              <div className="text-left">
                <p>&quot;Innovative iOS and Android apps that engage users and drive growth.&quot;</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center border border-[#6E6E6E] rounded-[32px] p-10 mt-10 md:m-5 md:p-8">
              <div className="flex items-center justify-center p-[20px]">
              <img className=" w-[100px]" src="/src/assets/custom-software.png" alt="web-development" />
              </div>
              <div className="text-center font-semibold pb-4">
                <h2>Custom Software Developments</h2>
              </div>
              <div className="text-left">
                <p>&quot;Innovative iOS and Android apps that engage users and drive growth.&quot;</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};