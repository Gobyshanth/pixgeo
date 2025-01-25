
import logo from "../../assets/logo.webp"; 

export const Header = () => {
  return (
    <div className="section navbar flex md:justify-center md:text-center font-roboto align-center ">
     <ul className="nav fixed flex md:flex-row flex-col m-10 md:rounded-[25.6px] md:h-[62px] justify-around md:items-center bg-black24 bg-transparent backdrop-blur-lg pt-[100px]">
        <a href="/">
          <li className="text-[20px] md:px-6">Home</li>
        </a>
        <a href="/About">
          <li  className="text-[20px] md:px-6">About Us</li>
        </a>
        <i  className="hidden md:block rounded-[50%] p-5 flex items-center w-[110px] h-[110px] bg-black24 backdrop-blur-[25px]" >
          <img src={logo} alt="Logo"   className=" rounded-[50%]  w-[70px] h-[70px]" />
        </i>
        <a href="/Services">
          <li  className="text-[20px] md:px-6">Services</li>
        </a>
        <a href="/Contact">
          <li  className="text-[20px] md:px-6">Contact Us</li>
        </a>
      </ul>
    </div>
  );
};
