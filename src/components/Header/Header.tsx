import MenuItem from "./MenuItem";
import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-[82px] z-10 flex items-center justify-center">
      <div className="flex items-center gap-3 md:gap-x-0.5">
        {/* Logo Section */}
        <div className="w-[42px] h-[42px] bg-white mr-[10px] flex items-center justify-center rounded-md">
          <Image
            alt="logo"
            width={20}
            height={20}
            src="https://i.ibb.co/qBYn0Tn/Frame-1.png"
            className="w-[20px] h-[20px]"
          />
        </div>

        {/* Menu Items: Hidden on smaller screens */}
        <div className="h-[42px] flex items-center bg-white/50 backdrop-blur-lg rounded-md">
          <MenuItem />
        </div>
      </div>
    </div>
  );
};

export default Header;
