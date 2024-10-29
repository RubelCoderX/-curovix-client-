import Image from "next/image";
import { FC } from "react";
import { BiExpand } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";

interface WorkItem {
  img: string;
  title: string;
  tags: string[];
}

interface WorkingCardProps {
  item: WorkItem;
}

const WorkingCard: FC<WorkingCardProps> = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[550px] h-[566px] mx-auto">
      <div className="relative p-4">
        <Image
          src={item.img}
          alt={item.title}
          width={500}
          height={300}
          className="object-cover w-[558px] h-[420px] rounded-md"
        />
      </div>
      <div className="p-4">
        <div className="flex space-x-2 justify-between">
          <div>
            <h3 className="text-2xl mb-2">{item.title}</h3>
            <div className="flex space-x-2">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className=" border  px-2 py-2 border-red-500 rounded-md text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="w-[60px] h-[60px] rounded-md bg-[#D6D6D6] flex items-center justify-center">
            <MdArrowOutward className="w-[32px] h-[32px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingCard;
