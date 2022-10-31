import logo from "../assets/logo.png";
import mode from "../assets/mode.png";
import arrowdown from "../assets/arrowdown.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-5">
      <img src={logo} alt="logo" className="w-[170.7px] h-[41.46px]" />
      <div className="flex justify-start items-center">
        <button className="flex justify-start items-center mr-[14px]">
          <p className="text-[#F2F0FF] text-sm font-semibold mr-4">EN/USD</p>
          <img src={arrowdown} alt="option" className="h-4 w-4" />
        </button>
        <div className="border-l border-l-[#6F6F6F] py-[7px] pl-6">
          <img src={mode} alt="mode" className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
