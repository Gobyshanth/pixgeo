import img from "../../assets/Rectangle 8.png"; // Correct import
import address from "../../assets/home.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";

export const Contact = () => {
  return (
    <div
      className="w-full h-[75%] md:h-[90%] sm:h-[70%] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="flex justify-center items-center min-h-screen pt-[0px]">
        <div className="bg-black text-white text-center p-6 sm:p-10 md:p-16 lg:p-[80px] pt-6 sm:pt-10 md:pt-16 bg-opacity-50 rounded-2xl h-auto sm:h-[1000px] md:h-[1200px] h-[1200px] w-full sm:w-[90%] md:w-[90%] lg:w-[1140px] mt-10 sm:mt-20 md:mt-32 lg:mt-[250px]">
          <h3 className="text-2xl  md:text-[70px] font-bold mb-4 pb-[20px] font-courier">
            Contact
          </h3>
          <p className="text-lg font-courier pb-[20px]">
            We’d love to hear from you! Whether you have a question, need
            assistance, or just <br /> want to share your feedback, our team is
            here to help.
          </p>
          <div className="flex flex-col justify-center items-center ">
            <label className="self-start pl-4 sm:pl-[30px] md:pl-[50px] pb-[12px] font-courier text-[24px]">
              Firstname
            </label>

            <input
              type="text"
              // placeholder="Firstname"
              className="border p-2 rounded-md w-full sm:w-[500px] md:w-[700px] lg:w-[870px] h-[50px] sm:h-[56px] bg-black text-white"
            />

            <label className="self-start sm:pl-[30px] md:pl-[50px] pl-4 pt-[24px] pb-[12px] font-courier text-[24px]">
              Lastname
            </label>
            <input
              type="text"
              // placeholder="Lastname"
              className="border p-2 rounded-md w-full sm:w-[500px] md:w-[700px] lg:w-[870px] h-[50px] sm:h-[56px] bg-black text-white"
            />

            <label className="self-start pl-4 sm:pl-[30px] pt-[24px] pb-[12px] font-courier text-[24px] md:pl-[50px]">
              Phone Number
            </label>
            <input
              type="text"
              // placeholder="Lastname"
              className="border p-2 rounded-md w-full sm:w-[500px] md:w-[700px] lg:w-[870px] h-[50px] sm:h-[56px] bg-black text-white"
            />

            <label className="self-start sm:pl-[30px] pl-4 pt-[24px] pb-[12px] font-courier text-[24px] md:pl-[50px]">
              Email Address
            </label>
            <input
              type="text"
              // placeholder="Lastname"
              className="border p-2 rounded-md w-full sm:w-[500px] md:w-[700px] lg:w-[870px] h-[50px] sm:h-[56px] bg-black text-white"
            />
            <label className="self-start sm:pl-[30px] pl-4 pt-[24px] pb-[12px] font-courier text-[24px] md:pl-[50px]">
              Message
            </label>
            <textarea
              // placeholder="Enter your message"
              className="border p-2 rounded-md w-full sm:w-[500px] md:w-[700px] lg:w-[870px] h-[50px] sm:h-[56px] bg-black text-white"
            />
            <button
              className="bg-[#26555F] w-full sm:w-[500px] md:w-[700px] lg:w-[870px] 
                   h-[55px] sm:h-[60px] rounded-[10px] 
                   mt-[30px] sm:mt-[30px] font-mono 
                   text-[20px] sm:text-[24px] text-white"
            >
              {" "}
              submit{" "}
            </button>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-start gap-4 w-full mt-[40px]">
            {/* First Block */}
            <div className="flex flex-row items-center justify-left w-full md:w-[50%] gap-x-4 md:pl-[50px] ">
              <div className="rounded-full bg-white h-[50px] w-[50px] flex justify-center items-center ">
                <img src={address} />
              </div>
              <div className="flex flex-col items-center gap-y-2 max-w-[300px]">
                {/* First Row */}
                <div className="flex flex-row items-start gap-x-2 text-left w-full">
                  <p className=" font-semibold text-[20px] sm:text-[24px] md:text-[32px] font-courier">
                    Address
                  </p>
                </div>
                {/* Second Row */}
                <div className="flex flex-row items-center gap-x-2 text-center w-full">
                  <p className="text-[12px] font-courier md:text-[12px] sm:text-[12px] lg:md:text-[12px]">
                    UK
                  </p>
                </div>
              </div>
            </div>

            {/* Second Block */}
            <div className="flex flex-row items-center w-full gap-x-4 md:pl-[120px]">
              <div className="rounded-full bg-white h-[50px] w-[50px] flex justify-center items-center ">
                <img
                  src={phone}
                  alt="Phone Icon"
                  className="h-[30px] w-[30px]"
                />
              </div>
              <div className="flex flex-col items-center gap-y-2 max-w-[300px]">
                {/* First Row */}
                <div className="flex flex-row items-start gap-x-2 text-left w-full">
                  <p className=" font-semibold text-[20px] sm:text-[24px] md:text-[32px] font-courier">
                    Phone
                  </p>
                </div>
                {/* Second Row */}
                <div className="flex flex-row items-center gap-x-2 text-center w-full">
                  <p className="text-[12px] font-courier md:text-[12px] sm:text-[12px] lg:md:text-[12px]">
                    +44458896632
                  </p>
                </div>
              </div>
            </div>

            {/* Third Block */}
            <div className="flex flex-row items-center w-full gap-x-4 md:pl-[80px]">
              <div className="rounded-full bg-white h-[50px] w-[50px] flex justify-center items-center">
                <img
                  src={email}
                  alt="Email Icon"
                  className="h-[30px] w-[30px]"
                />
              </div>
              <div className="flex flex-col items-center gap-y-2 max-w-[300px]">
                {/* First Row */}
                <div className="flex flex-row items-start gap-x-2 text-left w-full">
                  <p className=" font-semibold text-[20px] sm:text-[24px] md:text-[32px] font-courier">
                    Email
                  </p>
                </div>
                {/* Second Row */}
                <div className="flex flex-row items-center gap-x-2 text-center w-full">
                  <p className="text-[12px] font-courier md:text-[12px] sm:text-[12px] lg:md:text-[12px]">
                    example@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
