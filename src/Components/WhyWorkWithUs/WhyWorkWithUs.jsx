export default function WhyWorkWithUs() {
  return (
    <div>
      <section>
        <div className="relative bg-cover bg-center font-courier h-auto hidden md:flex flex-col">
          <div className="bg-custom-why">
            <div className="flex pl-20 pt-20">
              <h1 className="text-5xl text-white font-bold pl-20 mb-8">
                Why Work with Us?
              </h1>
            </div>

            <div className="flex items-center ">
              <div className="relative flex w-full">
                <div>
                  <img className="pt-[50px] " src="/src/assets/why-work-with-us.png" alt="why-work-with-us" />
                <div className="absolute text-white left-[900px] top-[30px]">
                  <ul className="space-y-12 text-lg ">
                    <li className="flex items-center">
                      <span className="inline-block bg-white mt-[-20px] ml-[-150px] "></span>
                      <p>Strong Track Record &amp; Expertise.</p>
                    </li>
                    <li className="flex items-center pt-5">
                      <span className="inline-block bg-white ml-[-15px]"></span>
                      <p>Agile and Flexible Development.</p>
                    </li>
                    <li className="flex items-center pt-4">
                      <span className="inline-block bg-white ml-[15px] mt-[80px]"></span>
                      <p>On-Time &amp; On-Budget Delivery.</p>
                    </li>
                    <li className="flex items-center pt-4">
                      <span className="inline-block bg-white ml-[-20px]"></span>
                      <p>Dedicated Support &amp; Maintenance.</p>
                    </li>
                    <li className="flex items-center pt-3 ">
                      <span className="inline-block bg-white ml-[-20px] "></span>
                      <p>Cutting-edge Technologies Used.</p>
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="relative font-Courier pb-20 h-auto bg-gradient-to-r from-black via-purple-900 to-black md:hidden flex flex-col items-center">
          <div className="flex pt-20">
            <h1 className="text-5xl text-white font-bold pl-10 mb-8">
              Why Work with Us?
            </h1>
          </div>

          <div className="relative flex items-center justify-flex-end ">
            <div className="flex justify-right">
              <div className=" text-white">
                <ul className="space-y-6 text-lg ">
                  <li className="flex items-center">
                    <span className="inline-block bg-white "></span>
                    <p>Strong Track Record &amp; Expertise.</p>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block bg-white"></span>
                    <p>Agile and Flexible Development.</p>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block bg-white"></span>
                    <p>On-Time &amp; On-Budget Delivery.</p>
                  </li>
                  <li className="flex items-center ">
                    <span className="inline-block bg-white"></span>
                    <p>Dedicated Support &amp; Maintenance.</p>
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block bg-white"></span>
                    <p>Cutting-edge Technologies Used.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
