//import './About.css'
export const About = () => {
  return (
    <div className="container">
      {/* Hero Section */}
      <section>
        <div className="bg-[url('/src/assets/about-page.png')] bg-blur-custom bg-cover bg-center h-auto md:h-screen">
          <div className="bg-custom-gradient bg-cover bg-center h-[400px] md:h-screen flex items-end justify-center py-[50px]">
            <div className="relative flex items-center md:w-[1226px] md:h-[260px] text-center rounded-[32px] bg-black12 backdrop-blur-[25px] mx-5 md:mx-0">
              <h1 className="text-white font-courier font-bold text-[30px] text-minus-4 md:text-[50px] lg:text-[90px] px-4 py-5">
              “Empowering Tomorrow With Technology”
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-[#0c0618] via-[#1a0f2b] to-[#09202b py-2 text-white text-center w-full">
  <div className="w-full flex flex-col items-center">
    
   
    <div className="flex flex-col md:flex-row items-center w-full" style={{ marginTop: '-200px' }}> 
      <div className="w-full md:w-1/2 flex justify-start">
        <img src="/src/assets/robo-left.png" alt="Robot Hand" className="w-full max-w-3xl h-auto" />
      </div>
      <div className=" md:w-1/2 text-left p-0 md:pl-0" style={{ marginTop: '-50px', marginLeft: '-300px' }}>
        <h2 className="text-[50px] font-mono font-bold">Mission</h2>
        <p className="text-[20px] text-gray-300 font-bold font-courier text-[20px]">
          Our mission is to empower businesses through innovative, customized digital solutions that drive growth, efficiency, and success.
        </p>
      </div>
    </div>

   
    <div className="flex flex-col md:flex-row items-center w-full" style={{ marginTop: '-550px' , marginBottom:'-200px'}}>
      <div className="w-full md:w-1/3 text-left p-4" style={{  marginLeft: '360px' }}>
        <h2 className="text-[50px] font-mono font-bold">Vision</h2>
        <p className="text-[20px] font-bold text-gray-300 font-courier text-[20px]">
          To become the global leader in custom web, mobile, and software development, shaping the future of technology one project at a time.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-end">
        <img src="/src/assets/robo-right.png" alt="Robot Hand" className="w-full max-w-3xl h-auto" />
      </div>
    </div>

  </div>
</section>
<section className="inset-0 bg-gradient-to from-black via-transparent mb-16 mt-16">
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-20 px-12 max-w-7xl w-full mx-auto justify-center items-center text-center">

    
    <div className="relative flex items-center justify-center w-[543px] text-[#71FBF7] p-6">
      <div className="absolute inset-y-0 left-0 h-[242px] w-10 border-l-2 border-t-2 border-b-2 border-[#71FBF7] "></div>
      <div className="absolute inset-y-0 right-0 h-[242px] w-10 border-r-2 border-t-2 border-b-2 border-[#71FBF7]"></div>
      <div className="relative text-left">
        
       
      <div className="relative w-12 h-12">
      <div className="absolute inset-0 bg-[#71FBF7] opacity-20 blur-sm rounded-8xl"></div>
      <img
        src="/src/assets/integrity.png"
        alt="Integrity Icon"
        className="w-12 h-12 relative z-10"
      />
      </div>
      
        <h2 className="text-[24px] font-bold ml-24 text-[#71FBF7]">Integrity</h2>
        <p className="text-[#71FBF7] text-[18px] ml-24 ">
          We operate with transparency, honesty, and responsibility in every project...
        </p>
      </div>
    </div>

  
    <div className="relative flex items-center justify-center w-[543px] text-pink-400 p-6">
      <div className="absolute inset-y-0 left-0 h-[242px] w-10 border-l-2 border-t-2 border-b-2 border-[#E805B8]"></div>
      <div className="absolute inset-y-0 right-0 h-[242px] w-10 border-r-2 border-t-2 border-b-2 border-[#E805B8]"></div>
      <div className="relative text-left">
        <img src="/src/assets/collaborations.png" alt="Collaboration Icon" className="w-12 h-12 mb-4" />
        <h2 className="text-[24px] font-bold ml-24 text-[#E805B8]">Collaboration</h2>
        <p className="text-[#E805B8] text-[18px] ml-24">
          We believe in teamwork and working closely with clients to understand and meet their needs.
        </p>
      </div>
    </div>

    
    <div className="relative flex items-center justify-center  w-[543px] text-green-400 p-6">
      <div className="absolute inset-y-0 left-0 h-[242px] w-10 border-l-2 border-t-2 border-b-2 border-[#53921C]"></div>
      <div className="absolute inset-y-0 right-0 h-[242px] w-10 border-r-2 border-t-2 border-b-2 border-[#53921C]"></div>
      <div className="relative text-left">
        <img src="/src/assets/excellence.png" alt="Excellence Icon" className="w-12 h-12 mb-4" />
        <h2 className="text-[24px] font-bold ml-24 text-[#53921C]">Excellence</h2>
        <p className="text-[#53921C] text-[18px] ml-24">
          We strive for the highest standards in every solution we provide.
        </p>
      </div>
    </div>

    
    <div className="relative flex items-center justify-center  w-[543px] text-yellow-400 p-6">
      <div className="absolute inset-y-0 left-0 h-[242px] w-10 border-l-2 border-t-2 border-b-2 border-[#E9CA00]"></div>
      <div className="absolute inset-y-0 right-0 h-[242px] w-10 border-r-2 border-t-2 border-b-2 border-[#E9CA00]"></div>
      <div className="relative text-left">
        <img src="/src/assets/innovation.png" alt="Innovation Icon" className="w-12 h-12 mb-4" />
        <h2 className="text-[24px] font-bold ml-24 text-[#E9CA00]">Innovation</h2>
        <p className="text-[#E9CA00] text-[18px] ml-24">
          We prioritize creativity and the latest technology to deliver top-notch solutions.
        </p>
      </div>
    </div>
  </div>
</section>
{/* <section className="inset-0 bg-gradient-to from-black via-transparent mb-16 mt-16">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-20 px-12 max-w-7xl w-full place-items-center">
    {[
      { title: "Integrity", color: "#71FBF7", img: "/src/assets/integrity.png", borderColor: "border-[#71FBF7]" },
      { title: "Collaboration", color: "#E805B8", img: "/src/assets/collaborations.png", borderColor: "border-[#E805B8]" },
      { title: "Excellence", color: "#53921C", img: "/src/assets/excellence.png", borderColor: "border-[#53921C]" },
      { title: "Innovation", color: "#E9CA00", img: "/src/assets/innovation.png", borderColor: "border-[#E9CA00]" }
    ].map(({ title, color, img, borderColor }) => (
      <div key={title} className="relative flex flex-col items-center justify-center w-[543px] p-6 text-center" style={{ color }}>
        <div className={`absolute inset-y-0 left-0 h-[242px] w-10 border-l-2 border-t-2 border-b-2 ${borderColor}`}></div>
        <div className={`absolute inset-y-0 right-0 h-[242px] w-10 border-r-2 border-t-2 border-b-2 ${borderColor}`}></div>
        <div className="relative flex flex-col items-center">
          <img src={img} alt={`${title} Icon`} className="w-12 h-12 mb-4" />
          <h2 className="text-[24px] font-bold">{title}</h2>
          <p className="text-[18px]">We strive for the highest standards in every solution we provide.</p>
        </div>
      </div>
    ))}
  </div>
</section> */}




<section className="relative w-full min-h-screen flex items-center text-white mt-0">
  {/* Full Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center"
    style={{ backgroundImage: "url('/src/assets/hand.png')" }}
  >
    {/* Gradient Overlay for Smooth Blending */}
    <div className="absolute inset-0 bg-gradient-to-black/60 from-black via-transparent to-black/60"></div>
  </div>

  {/* Content Centered on Page */}
  <div className="relative z-10 max-w-4xl mx-96 px-6 md:px-0 text-left mt-44  ">
    <h2 className="text-[50px] md:text-5xl font-bold font-mono mb-4">Our Journey</h2>
    <p className="text-gray-300 text-[18px] text-base  md:text-lg leading-relaxed">
      Founded in 2010 by a group of passionate developers, our company started with a shared vision: to create software solutions that solve real business problems. 
      From humble beginnings working from a small garage, we ve grown into a dynamic team that serves businesses across multiple industries worldwide.
    </p>
  </div>
</section>









    </div>
  );
}
