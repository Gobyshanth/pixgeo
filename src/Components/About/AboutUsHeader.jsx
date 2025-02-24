export const AboutUsHeader = () => {
  return (
    <section>
        <div className="bg-[url('/src/assets/about_us_header.png')] bg-blur-custom bg-cover bg-center h-auto md:h-screen">
          <div className="bg-custom-gradient bg-cover bg-center h-[400px] md:h-screen flex items-end justify-center py-[50px]">
            <div className="relative flex items-center md:w-[1172px] md:h-[260px] text-center rounded-[32px] bg-black12 backdrop-blur-[15px] mx-5 md:mx-0">
              <h1 className="text-white font-courier font-bold text-[30px] md:text-[50px] lg:text-[90px] px-10 py-5">
              Empowering Tomorrow With Technology
              </h1>
            </div>
          </div>
        </div>
      </section>
  );
};