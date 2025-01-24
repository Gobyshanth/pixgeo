
import logo from "../../assets/logo.webp"; 

export const Header = () => {
  return (
    <div className="section navbar flex md:justify-center md:text-center font-courier align-center ">
     <ul className="nav fixed flex md:flex-row flex-col m-10 p-[5px] md:rounded-[25.6px] md:h-[42px] justify-around md:items-center bg-black/10 bg-transparent backdrop-blur-lg pt-[100px]">
        <a href="/" className="h-[30px]">
          <li className="text-[20px] md:px-8">Home</li>
        </a>
        <a href="/About">
          <li  className="text-[20px] md:px-8">About Us</li>
        </a>
        <i  className="hidden md:block rounded-2xl backdrop-blur-10% md:px-10" >
          <img src={logo} alt="Logo"   className=" rounded-[50%] w-[90px] w-[90px]  bg-gray-700 backdrop-blur-lg p-4 " />
        </i>
        <a href="/Services">
          <li  className="text-[20px] md:px-8 ">Services </li>
        </a>
        <a href="/Contact">
          <li  className="text-[20px] md:px-8 ">Contact Us</li>
        </a>
      </ul>
    </div>
  );
};
