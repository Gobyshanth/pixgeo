import ServiceCard from "./ServiceCard";
import { motion } from "framer-motion";

export const Services = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 50 }, // initial state (hidden and moved down)
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } }, // animation (fades in and moves up)
  };
  return (
    <div className="container">
      {/* Hero Section */}
      <section>
        <div className="bg-[url('/assets/futuristic-dj-using-virtual-reality-glasses-headline-party-play-music.png')] bg-blur-custom bg-cover bg-center h-auto md:h-screen">
          <div className="bg-custom-gradient bg-cover bg-center h-[400px] md:h-screen flex items-end justify-center py-[50px]">
            <div className="relative flex items-center md:w-[1226px] md:h-[260px] text-center rounded-[32px] bg-black12 backdrop-blur-[25px] mx-5 md:mx-0">
              <h1 className="text-white font-courier font-bold text-[30px] text-minus-4 md:text-[50px] lg:text-[90px] px-4 py-5">
                Tailored Solutions for Every Digital Need
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section>
        <ServiceCard />
      </section>
      <section className="bg-custom-mdend md:bg-gradient-to-b from-[#0f0f0f] via-[#362134] to-[#181a22]">
        <div className="flex flex-col items-center justify-center py-[50px] font-courier">
          <div className="w-[80%]">
            <div className="flex items-center">
              <h2 className="text-white md:text-[50px] text-3xl text-bold  font-bold pr-8 md:pb-5 md:pt-10 pb-5 pl-[10px]">
                Web Development
              </h2>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col md:flex-row justify-center text-white">
                <div className="flex flex-col items-center text-center md:w-1/2 md:p-10 md:mt-10 md:m-2 md:p-6">
                  <div className="flex items-center justify-center md:p-[20px] ">
                    <motion.div
                      className="m-5"
                      initial="hidden"
                      whileInView="visible"
                      variants={imageVariants}
                      viewport={{ once: true }}
                    >
                      <img
                        className=""
                        src="/assets/21034578.png "
                        alt="web-development"
                      />
                    </motion.div>
                  </div>
                  <div className="text-center text-[24px] font-semibold pb-3">
                    <h3>Custom design & development</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center md:w-1/2 md:p-10 md:mt-10 md:m-2 md:p-6">
                  <div className="flex items-center justify-center md:p-[20px]">
                    <motion.div
                      className="m-5"
                      initial="hidden"
                      whileInView="visible"
                      variants={imageVariants}
                      viewport={{ once: true }}
                    >
                      <img
                        className=""
                        src="/assets/21034578.png"
                        alt="web-development"
                      />
                    </motion.div>
                  </div>
                  <div className="text-center text-[24px] font-semibold pb-4">
                    <h3>SEO - Friendly Architecture</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center md:py-[50px] font-courier">
          <div className="w-[80%]">
            <div className="flex items-center">
              <h2 className="text-white md:text-[50px] text-3xl font-bold pr-8 md:pb-10 pb-5 pl-[10px]">
                Mobile App Development
              </h2>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-wrap justify-center text-white">
                <div className="flex flex-col items-center text-center md:p-10 md:mt-10 md:m-2 md:p-6 w-full md:w-[45%]">
                  <div className="flex items-center justify-center md:p-[20px]">
                    <motion.div
                      className="m-5"
                      initial="hidden"
                      whileInView="visible"
                      variants={imageVariants}
                      viewport={{ once: true }}
                    >
                      <img
                        className="w-[520px] h-[auto]"
                        src="/assets/web.png"
                        alt="web-development"
                      />
                    </motion.div>
                  </div>
                  <div className="text-center text-[24px] font-semibold pb-4">
                    <h3>Native and cross-platform apps</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center md:p-10 md:mt-10 md:m-2 md:p-6 w-full md:w-[45%]">
                  <div className="flex items-center justify-center md:p-[20px]">
                    <motion.div
                      className="m-5"
                      initial="hidden"
                      whileInView="visible"
                      variants={imageVariants}
                      viewport={{ once: true }}
                    >
                      <img
                        className="w-[520px] h-[auto]"
                        src="/assets/platform-apps.png"
                        alt="platform-apps"
                      />
                    </motion.div>
                  </div>
                  <div className="text-center text-[24px] font-semibold pb-4">
                    <h3>Scalable, Secure Backends</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center md:p-10 md:mt-10 md:m-2 md:p-6 w-full md:w-[45%]">
                  <div className="flex items-center justify-center md:p-[20px]">
                    <motion.div
                      className="m-5"
                      initial="hidden"
                      whileInView="visible"
                      variants={imageVariants}
                      viewport={{ once: true }}
                    >
                      <img
                        className="w-[520px] h-[auto]"
                        src="/assets/platform-apps.png"
                        alt="platform-apps"
                      />
                    </motion.div>
                  </div>
                  <div className="text-center text-[24px] font-semibold pb-4">
                    <h3>Scalable, Secure Backends</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center py-[50px] font-courier">
          <div className="w-[80%]">
            <div className="flex items-center">
              <h2 className="text-white md:text-[50px] text-3xl font-bold pr-8 md:pb-10 pb-5 pl-[10px]">
                Mobile App Development
              </h2>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-wrap justify-center text-white">
                <div className="flex flex-col items-center text-center md:p-10 md:mt-10 md:m-2 md:p-6 w-full md:w-[45%]">
                  <div className="flex items-center justify-center md:p-[20px]">
                    <motion.div
                      className="m-5"
                      initial="hidden"
                      whileInView="visible"
                      variants={imageVariants}
                      viewport={{ once: true }}
                    >
                      <img
                        className="w-[520px] h-[auto]"
                        src="/assets/web.png"
                        alt="web-development"
                      />
                    </motion.div>
                  </div>
                  <div className="text-center text-[24px] font-semibold pb-4">
                    <h3>Native and cross-platform apps</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center md:p-10 md:mt-10 md:m-2 md:p-6 w-full md:w-[45%]">
                  <div className="flex items-center justify-center md:p-[20px]">
                    <motion.div
                      className="m-5"
                      initial="hidden"
                      whileInView="visible"
                      variants={imageVariants}
                      viewport={{ once: true }}
                    >
                      <img
                        className="w-[520px] h-[auto]"
                        src="/assets/platform-apps.png"
                        alt="platform-apps"
                      />
                    </motion.div>
                  </div>
                  <div className="text-center text-[24px] font-semibold pb-4">
                    <h3>Scalable, Secure Backends</h3>
                  </div>
                </div>
                <div className="flex flex-col items-center text-center md:p-10 md:mt-10 md:m-2 md:p-6 w-full md:w-[45%]">
                  <div className="flex items-center justify-center md:p-[20px]">
                    <motion.div
                      className="m-5"
                      initial="hidden"
                      whileInView="visible"
                      variants={imageVariants}
                      viewport={{ once: true }}
                    >
                      <img
                        className="w-[520px] h-[auto]"
                        src="/assets/platform-apps.png"
                        alt="platform-apps"
                      />
                    </motion.div>
                  </div>
                  <div className="text-center text-[24px] font-semibold pb-4">
                    <h3>Scalable, Secure Backends</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
