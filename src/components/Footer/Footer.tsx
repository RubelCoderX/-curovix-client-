import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer id="footer" className="bg-black  mt-20 h-[720px]">
      <div className="h-[360px] pt-20">
        <Image
          src="https://i.ibb.co/kXmdT59/Frame-1-1.png"
          width={448}
          height={448}
          alt="logo"
          className="h-[240px] w-[1184] "
        />
      </div>
      {/* Bottom Copyright Section */}
      <div className="p-2">
        <div className="h-[300px] justify-evenly items-center flex gap-6 ">
          {/* Contact Information */}
          <div className="flex w-[432px] p-6 flex-col h-[246px] rounded-md items-center md:items-start bg-[#2C2D2D] text-gray-300 space-y-1 mb-6 md:mb-0">
            <p>+8801700000000</p>
            <p>info@curovix.com</p>
            <p>Dhaka, Bangladesh</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center h-[246px] p-6 rounded-md w-[744px]  space-y-1 bg-[#2C2D2D]">
            <p className="font-semibold text-gray-300 text-3xl ">
              Connect with us and stay in touch on our creative journey!
            </p>
            <div className="flex flex-wrap justify-center space-x-3 mt-2">
              <div className="flex flex-wrap justify-center space-x-3 mt-2">
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <Link
                      key={index}
                      href="#"
                      className="text-gray-300 hover:text-red-500 transition-all"
                    >
                      Link Button →
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#2C2D2D] py-3  rounded-md">
          <p className="text-center text-white">
            {" "}
            © 2025 Curovix. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
