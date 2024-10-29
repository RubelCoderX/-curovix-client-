import Image from "next/image";

const Hero = () => {
  return (
    <div id="hero">
      <div className="h-[144px]  mx-auto flex justify-between">
        <div className="w-[422px] text-4xl">
          <h2>DESIGN SOLUTIONS TO FUEL YOUR BRAN’S SUCCESS</h2>
        </div>
        <div className="w-[555px] h-[120px]">
          <p className="text-2xl">
            We provide innovative design solutions that drive your brand’s
            growth and success. Through strategic and creative design, we turn
            your vision into impactful results.
          </p>
        </div>
      </div>
      <div>
        <Image
          src="https://i.ibb.co/Lg6kb62/Video.png"
          alt="hero"
          width={1200}
          height={400}
          className="w-[1200px] h-[675px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
