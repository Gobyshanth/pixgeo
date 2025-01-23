
import logo from "../../assets/logo.webp"; 

export const Header = () => {
  return (
    <div className="section navbar flex justify-center text-center align-center ">
     <ul className="nav flex m-5 p-[5px] rounded-[25.6px] h-[62px] w-[728px] bg-black/10 bg-transparent backdrop-blur-lg pt-[100px]">
        <a href="/" className="h-[30px]">
          <li className="text-[20px] pl-[40px] pr-[50px]">Home</li>
        </a>
        <a href="/About">
          <li  className="text-[20px] pr-[80px]">About Us</li>
        </a>
        <i  className="pr-[80px]  rounded-2xl  " >
          <img src={logo} alt="Logo"   className=" rounded-[50%] w-[30px] w-[30px]  " />
        </i>
        <a href="/Services">
          <li  className="text-[20px] pr-[50px]">Services</li>
        </a>
        <a href="/Contact">
          <li  className="text-[20px] ">Contact Us</li>
        </a>
      </ul>
    </div>
  );
};
