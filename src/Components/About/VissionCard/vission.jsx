const Vission = () => {
  return (
    <section className="bg-gradient-to-r from-[#0c0618] via-[#1a0f2b] to-[#09202b] py-2 text-white text-center w-full">
      <div className="w-full flex flex-col items-center">
        {/* Mission Section */}
        <div
          className="flex flex-col md:flex-row items-center w-full"
          
        >
          {/* Robot Hand Image - Visible Only on Desktop */}
          <div className="w-full md:w-1/2 flex justify-start hidden md:block">
            <img
              src="../../../public/assets/robo-left.png"
              alt="Robot Hand"
              className="w-full max-w-3xl h-auto"
            />
          </div>

          <div
            className="md:w-1/2 sm:w-[400px] text-left p-0 md:pl-0 lg:r-[100px]"
            style={{ marginTop: "-50px", marginLeft: "-200px" }}
          >
            <h2 className="text-[18px] md:text-[50px] font-mono font-bold">
              Mission
            </h2>
            <p className="text-[14px] md:text-[20px] text-gray-300 font-bold font-courier w-[90%] mx-auto">
              Our mission is to empower businesses through innovative,
              customized digital solutions that drive growth, efficiency, and
              success.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div
          className="flex flex-col md:flex-row items-center md:w-full sm:w-[100px]"
          style={{ marginTop: "-550px", marginBottom: "-200px" }}
        >
          <div
            className="sm:w-[400px] md:w-[800px] text-left p-4"
            style={{ marginLeft: "160px" }}
          >
            <h2 className="text-[18px] md:text-[50px] font-mono font-bold">
              Vision
            </h2>
            <p className="text-[14px] md:text-[20px] font-bold text-gray-300 font-courier">
              To become the global leader in custom web, mobile, and software
              development, shaping the future of technology one project at a
              time.
            </p>
          </div>

          {/* Robot Hand Image - Visible Only on Desktop */}
          <div className="w-full md:w-1/2 flex justify-end hidden md:block">
            <img
              src="./assets/robo-right.png"
              alt="Robot Hand"
              className="w-full max-w-3xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vission;