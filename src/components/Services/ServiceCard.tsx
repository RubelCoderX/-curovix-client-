import Image from "next/image";
import React, { FC } from "react";

interface ServiceCardProps {
  img: string;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({ img, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md max-w-[460px] h-[520px] flex flex-col justify-end  m-4 p-6">
      <div className="flex flex-col ">
        <Image
          src={img}
          alt="service"
          width={100}
          height={100}
          className="w-[80px] h-[80px] mb-4"
        />
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
