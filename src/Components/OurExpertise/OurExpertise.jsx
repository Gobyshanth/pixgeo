export const OurExpertise = () => {
  return (
    <section>
    <div className="bg-custom-end flex flex-col items-center justify-center py-[50px] font-courier">
     <div className="w-[80%]">
     <div className="flex items-center">
          <h2 className="text-white text-4xl font-bold pr-8 pb-10 pl-[10px]">
            Our Expertise
          </h2>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col md:flex-row justify-center text-white">
          <div className="flex flex-col items-center text-center border border-[#6E6E6E] md:w-1/4 rounded-[32px] p-10 mt-10 md:m-2 md:p-6">
              <div className="flex items-center justify-center p-[20px]">
                <img className=" w-[100px]" src="/src/assets/html.gif" alt="web-development" />
              </div>
              <div className="text-center font-semibold pb-4">
                <h2>Web Developments</h2>
              </div>
              <div className="text-left">
                <p>&quot;Beautiful, functional, and responsive websites designed to meet your needs.&quot;</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center border border-[#6E6E6E] md:w-1/4 rounded-[32px] p-10 mt-10 md:m-2 md:p-6">
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

            <div className="flex flex-col items-center text-center border border-[#6E6E6E] md:w-1/4 rounded-[32px] p-10 mt-10 md:m-2 md:p-6">
              <div className="flex items-center justify-center p-[20px]">
              <img className=" w-[100px]" src="/src/assets/custom-software.png" alt="web-development" />
              </div>
              <div className="text-center font-semibold pb-4">
                <h2>Custom Software Developments</h2>
              </div>
              <div className="text-left">
                <p>&quot;Tailored software solutions that optimize processes and enhance business operations.&quot;</p>
              </div>
            </div>

            <div className="flex flex-col items-center text-center border border-[#6E6E6E] md:w-1/4 rounded-[32px] p-10 mt-10 md:m-2 md:p-6">
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
     </div>
    </div>
    </section>
  );
};