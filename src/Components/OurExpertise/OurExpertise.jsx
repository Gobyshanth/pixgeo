import "./animations.css"; // Custom animations file


export const OurExpertise = () => {
  return (
    <section>
    <div className="md:bg-custom-end bg-custom-mdend flex flex-col items-center justify-center py-[50px] font-courier">
     <div className="w-[80%]">
     <div className="flex items-center">
          <h2 className="text-white md:text-4xl text-3xl font-bold pr-8 md:pb-10 pb-5 pl-[10px]">
            Our Expertise
          </h2>
        </div>
        <div className="flex items-center justify-center w-full">
        <div className="flex flex-col md:flex-row justify-center text-white">
  {[
    { src: "/assets/html.gif", title: "Web Developments", desc: "Beautiful, functional, and responsive websites designed to meet your needs.", animation: "animate-bounce" },
    { src: "/assets/mobile-app.png", title: "Mobile App Developments", desc: "Innovative iOS and Android apps that engage users and drive growth.", animation: "animate-spin-slow" },
    { src: "/assets/custom-software.png", title: "Custom Software Developments", desc: "Tailored software solutions that optimize processes and enhance business operations.", animation: "animate-float" },
    { src: "/assets/ai.png", title: "AI-Powered Solutions", desc: "Harness the power of artificial intelligence to automate processes, enhance decision-making, and create intelligent applications.", animation: "animate-wiggle" }
  ].map((item, index) => (
    <div key={index} className="flex flex-col items-center text-center border border-[#6E6E6E] md:w-1/4 rounded-[32px] p-10 mt-10 md:m-2 md:p-6">
      <div className="flex items-center justify-center p-[20px]">
        <img className={`w-[100px] ${item.animation}`} src={item.src} alt={item.title} />
      </div>
      <div className="text-center font-semibold pb-4">
        <h2>{item.title}</h2>
      </div>
      <div className="text-center">
        <p>&quot;{item.desc}&quot;</p>
      </div>
    </div>
  ))}
</div>
        </div>
     </div>
    </div>
    </section>
  );
};