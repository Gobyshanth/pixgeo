import { motion } from "framer-motion";

export const About = () => {
  const aboutVariants = {
    hidden: { opacity: 0, y: 50 }, // initial state (hidden and moved down)
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } }, // animation (fades in and moves up)
  };
  return (
    <div className="container">
      {/* Hero Section */}
      <section>
        <div className="bg-[url('/assets/about-page.png')] bg-blur-custom bg-cover bg-center h-auto md:h-screen">
          <div className="bg-custom-gradient bg-cover bg-center h-[400px] md:h-screen flex items-end justify-center py-[50px]">
            <div className="relative flex items-center md:w-[1226px] md:h-[260px] text-center rounded-[32px] bg-black12 backdrop-blur-[25px] mx-5 md:mx-0">
              <h1 className="text-white font-courier font-bold text-[30px] md:text-[50px] lg:text-[90px] px-4 py-5">
                “Empowering Tomorrow With Technology”
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-gradient-to-r from-[#0c0618] via-[#1a0f2b] to-[#09202b] py-12 text-white text-center w-full">
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col md:flex-row items-center w-full ">
            <div className="hidden md:block md:w-1/2">
              <motion.div
                className="m-5"
                initial="hidden"
                whileInView="visible"
                variants={aboutVariants}
                viewport={{ once: true }}
              >
                <img
                  src="/assets/robo-left.png"
                  alt="Robot Hand"
                  className="w-full max-w-3xl h-auto"
                />
              </motion.div>
            </div>
            <div className="md:w-1/2 text-left p-4 md:p-0 lg:pr-20">
              <motion.div
                className="m-5"
                initial="hidden"
                whileInView="visible"
                variants={aboutVariants}
                viewport={{ once: true }}
              >
                <h2 className="text-[28px] md:text-[50px] font-mono font-bold">
                  Mission
                </h2>
                <p className="text-[16px] md:text-[20px] text-gray-300 font-bold font-courier mx-auto">
                  Our mission is to empower businesses through innovative,
                  customized digital solutions that drive growth, efficiency,
                  and success.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center w-full mt-12">
            <div className="w-full md:w-1/2 text-left p-4 lg:pl-20">
              <motion.div
                className="m-5"
                initial="hidden"
                whileInView="visible"
                variants={aboutVariants}
                viewport={{ once: true }}
              >
                <h2 className="text-[28px] md:text-[50px] font-mono font-bold">
                  Vision
                </h2>
                <p className="text-[16px] md:text-[20px] font-bold text-gray-300 font-courier">
                  To become the global leader in custom web, mobile, and
                  software development, shaping the future of technology one
                  project at a time.
                </p>
              </motion.div>
            </div>
            <div className="hidden md:block md:w-1/2">
              <img
                src="/assets/robo-right.png"
                alt="Robot Hand"
                className="w-[100%] max-w-3xl h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative bg-gradient-to from-black via-transparent mb-20 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 px-2 sm:px-8 md:px-12 max-w-7xl w-full mx-auto justify-center items-center text-center md:pb-16">
          {[
            {
              title: "Integrity",
              text: "We operate with transparency, honesty, and responsibility in every project...",
              color: "#71FBF7",
              imgSrc: "./assets/abc.png",
            },
            {
              title: "Collaboration",
              text: "We believe in teamwork and working closely with clients to understand and meet their needs.",
              color: "#E805B8",
              imgSrc: "/assets/collaborations.png",
            },
            {
              title: "Excellence",
              text: "We strive for the highest standards in every solution we provide.",
              color: "#89EB33",
              imgSrc: "/assets/excellence.png",
            },
            {
              title: "Innovation",
              text: "We prioritize creativity and the latest technology to deliver top-notch solutions.",
              color: "#E9CA00",
              imgSrc: "/assets/innovation.png",
            },
          ].map(({ title, text, color, imgSrc }, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center justify-center w-full md:w-full sm:p-4 md:p-6 gap-4 text-[${color}]`}
            >
              <div
                className={`absolute inset-y-0 left-0 h-[242px] ml-[20px]  w-8 sm:w-10 border-l-2 border-t-2 border-b-2 border-[${color}]`}
              ></div>
              <div
                className={`absolute inset-y-0 right-0 h-[242px] mr-[20px] w-8 sm:w-10 border-r-2 border-t-2 border-b-2 border-[${color}]`}
              ></div>
              <div className="relative flex flex-col md:py-0 py-10 items-center w-[250px] h-[220px] pb-[80px]">
                <div className="relative w-10 sm:w-12 h-10 sm:h-12 group">
                  <div
                    className={`absolute inset-0 w-[120%] sm:w-[130%] h-[120%] sm:h-[130%] bg-[${color}] opacity-20 blur-md rounded-3xl`}
                  ></div>
                  <img
                    src={imgSrc}
                    alt={`${title} Icon`}
                    className="w-10 sm:w-12 h-10 sm:h-12 relative z-10 animate-zoom "
                  />
                </div>
                <div className="mt-2 text-center w-[90%] md:w-[470px]">
                  <h2
                    className={`text-[16px] sm:text-[18px]  md:text-[24px] font-bold text-[${color}] font-courier`}
                  >
                    {title}
                  </h2>
                  <p className="text-[12px] sm:text-[14px] md:text-[18px] font-courier">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <style>{`
      @keyframes zoomEffect {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
      }
      .animate-zoom {
        animation: zoomEffect 1s infinite;
      }
    `}</style>
        </div>
      </section>

      <section className="relative w-full h-auto flex md:items-center md:justify-center text-white mt-10">
        {/* Image Section */}
        <div className="md:w-full">
          <img
            src="/assets/hand.png"
            alt="Robot Hand"
            className="w-full h-auto object-cover opacity-60 hidden md:block"
          />
        </div>

        {/* Text Section */}
        <div className="md:absolute relative flex md:w-full md:items-center md:justify-center z-10 mt-0 md:my-0 my-20 md:px-4">
          <motion.div
            className="m-5"
            initial="hidden"
            whileInView="visible"
            variants={aboutVariants}
            viewport={{ once: true }}
          >
            <div className="md:text-center text-left font-mono  md:max-w-4xl">
              <h2 className="text-[28px] md:text-[50px] font-bold font-mono mb-4 shadow-lg">
                Our Journey
              </h2>
              <p className="text-gray-300 text-[16px] md:text-[18px] leading-relaxed">
                Founded in 2010 by a group of passionate developers, our company
                started with a shared vision: to create software solutions that
                solve real business problems. From humble beginnings working
                from a small garage, weve grown into a dynamic team that serves
                businesses across multiple industries worldwide.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};