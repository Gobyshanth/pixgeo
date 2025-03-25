export const About = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section>
        <div className="bg-[url('/src/assets/about-page.png')] bg-blur-custom bg-cover bg-center h-auto md:h-screen">
          <div className="bg-custom-gradient bg-cover bg-center h-[400px] md:h-screen flex items-end justify-center py-[50px]">
            <div className="relative flex items-center md:w-[1226px] md:h-[260px] text-center rounded-[32px] bg-black12 backdrop-blur-[25px] mx-5 md:mx-0">
              <h1 className="text-white font-courier font-bold text-[20px] md:text-[50px] lg:text-[90px] px-4 py-5">
                “Empowering Tomorrow With Technology”
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0c0618] via-[#1a0f2b] to-[#09202b] py-2 text-white text-center w-full">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center w-full " style={{ marginTop: "-200px" }}>
            <div className="w-full md:w-1/2 flex justify-start md:block hidden">
              <img
                src="/src/assets/robo-left.png"
                alt="Robot Hand"
                className="w-full max-w-3xl h-auto"
              />-
            </div>
            <div className="md:w-1/2 sm:w-[400px] text-left p-0 md:pl-0 lg:r-[100px]" style={{ marginTop: "-50px", marginLeft: "-200px" }}>
              <h2 className="text-[18px] md:text-[50px] font-mono font-bold">Mission</h2>
              <p className="text-[14px] md:text-[20px] text-gray-300 font-bold font-courier w-[90%] mx-auto">
                Our mission is to empower businesses through innovative,
                customized digital solutions that drive growth, efficiency, and
                success.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:w-full sm:w-[100px]" style={{ marginTop: "-550px", marginBottom: "-200px" }}>
            <div className="sm:w-[400px] md:w-[800px] text-left p-4" style={{ marginLeft: "160px" }}>
              <h2 className="text-[18px] md:text-[50px] font-mono font-bold">Vision</h2>
              <p className="text-[14px] md:text-[20px] font-bold text-gray-300 font-courier">
                To become the global leader in custom web, mobile, and software
                development, shaping the future of technology one project at a
                time.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <img
                src="/src/assets/robo-right.png"
                alt="Robot Hand"
                className="w-full max-w-3xl h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="inset-0 bg-gradient-to from-black via-transparent mb-16 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[120px] px-12 max-w-7xl w-full mx-auto justify-center items-center text-center md:pb-[60px]">
          {[{
            title: "Integrity",
            text: "We operate with transparency, honesty, and responsibility in every project...",
            color: "#71FBF7",
            imgSrc: "/src/assets/integrity.png",
          },
          {
            title: "Collaboration",
            text: "We believe in teamwork and working closely with clients to understand and meet their needs.",
            color: "#E805B8",
            imgSrc: "/src/assets/collaborations.png",
          },
          {
            title: "Excellence",
            text: "We strive for the highest standards in every solution we provide.",
            color: "#89EB33",
            imgSrc: "/src/assets/excellence.png",
          },
          {
            title: "Innovation",
            text: "We prioritize creativity and the latest technology to deliver top-notch solutions.",
            color: "#E9CA00",
            imgSrc: "/src/assets/innovation.png",
          }].map(({ title, text, color, imgSrc }, index) => (
            <div key={index} className={`relative flex flex-col md:flex-row items-center justify-center w-full md:w-[543px] md:p-6 gap-4 text-[${color}]`}>
              <div className={`absolute inset-y-0 left-0 h-[242px] w-10 border-l-2 border-t-2 border-b-2 border-[${color}]`}></div>
              <div className={`absolute inset-y-0 right-0 h-[242px] w-10 border-r-2 border-t-2 border-b-2 border-[${color}]`}></div>

              <div className="relative flex flex-col md:items-start items-center w-full md:pl-[30px] md:pb-[40px]">
                <div className="relative w-12 h-12 group">
                  <div className={`absolute inset-0 w-[130%] h-[130%] bg-[${color}] opacity-20 blur-md rounded-3xl`}></div>

                  <img
                    src={imgSrc}
                    alt={`${title} Icon`}
                    className="w-12 h-12 relative z-10 animate-zoom"
                  />
                </div>

                <div className="mt-2 text-center md:text-left md:pl-[70px] md:w-[470px] md:h-[60px]">
                  <h2 className={`text-[14px] md:text-[24px] font-bold text-[${color}] font-courier`}>{title}</h2>
                  <p className={`text-[14px] md:text-[18px] font-courier`}>{text}</p>
                </div>
              </div>
            </div>
          ))}

          <style>
            {`
    @keyframes zoomEffect {
      0% { transform: scale(1); }
      50% { transform: scale(1.2); }
      100% { transform: scale(1); }
    }

    .animate-zoom {
      animation: zoomEffect 1s infinite;
    }
  `}
          </style>
        </div>
      </section>

      <section className="relative md:w-full min-h-screen flex items-center text-white mt-0">
        <div className="absolute inset-0 bg-cover bg-center hidden md:block" style={{ backgroundImage: "url('/src/assets/hand.png')" }}>
          <div className="absolute inset-0 bg-gradient-to-black/60 from-black via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl w-[800px] sm:mx-[150px] px-6 md:px-0 text-left md:mt-[250px] md:mt-[250px]">
          <h2 className="text-[20px] md:text-[50px] font-bold font-mono mb-4 font-courier md:text-[50px] md:pb-[10px]">
            Our Journey
          </h2>
          <p className="text-gray-300 text-[14px] md:text-[18px] text-base md:text-lg leading-relaxed font-courier">
            Founded in 2010 by a group of passionate developers, our company
            started with a shared vision: to create software solutions that
            solve real business problems. From humble beginnings working from a
            small garage, we've grown into a dynamic team that serves businesses
            across multiple industries worldwide.
          </p>
        </div>
      </section>
    </div>
  );
};
