import React, { FC } from "react";

import WorkingCard from "./WorkingCard";

const workData = [
  {
    img: "https://i.ibb.co/6rG5fcp/Image.png",
    title: "Rock Branding Design",
    tags: ["UI/UX", "UI/UX"],
  },
  {
    img: "https://i.ibb.co/6rG5fcp/Image.png",
    title: "Rock Branding Design",
    tags: ["UI/UX", "UI/UX"],
  },
  {
    img: "https://i.ibb.co/6rG5fcp/Image.png",
    title: "Rock Branding Design",
    tags: ["UI/UX", "UI/UX"],
  },
  {
    img: "https://i.ibb.co/6rG5fcp/Image.png",
    title: "Rock Branding Design",
    tags: ["UI/UX", "UI/UX"],
  },
  {
    img: "https://i.ibb.co/6rG5fcp/Image.png",
    title: "Rock Branding Design",
    tags: ["UI/UX", "UI/UX"],
  },
  {
    img: "https://i.ibb.co/6rG5fcp/Image.png",
    title: "Rock Branding Design",
    tags: ["UI/UX", "UI/UX"],
  },
  {
    img: "https://i.ibb.co/6rG5fcp/Image.png",
    title: "Rock Branding Design",
    tags: ["UI/UX", "UI/UX"],
  },
  {
    img: "https://i.ibb.co/6rG5fcp/Image.png",
    title: "Rock Branding Design",
    tags: ["UI/UX", "UI/UX"],
  },
];

const Working: FC = () => {
  return (
    <div id="work" className="mt-16">
      <h2 className="text-3xl font-bold text-center mb-16">WORK</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {workData.map((item, index) => (
          <WorkingCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Working;
