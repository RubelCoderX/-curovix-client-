import ServiceCard from "./ServiceCard";

const Services = () => {
  const cardData = [
    {
      id: 1,
      img: "https://i.ibb.co/p6HcWjD/Clip-path-group.png",
      title: "UI/UX Design",
      description:
        "Our graphic design services bring your brand’s vision to life with stunning visuals that capture attention and convey your message clearly.",
    },
    {
      id: 2,
      img: "https://i.ibb.co/SNQwFdB/Clip-path-group-1.png",
      title: "Web Design",
      description:
        "Our graphic design services bring your brand’s vision to life with stunning visuals that capture attention and convey your message clearly.",
    },
    // {
    //   id: 3,
    //   img: "https://i.ibb.co/SNQwFdB/Clip-path-group-1.png",
    //   title: "Web Design",
    //   description:
    //     "Our graphic design services bring your brand’s vision to life with stunning visuals that capture attention and convey your message clearly.",
    // },
  ];

  return (
    <div id="service">
      <h2 className=" text-center text-5xl mb-10">Service</h2>
      <div className="grid grid-cols-2 justify-center items-center gap-6 p-4">
        {cardData.map((card) => (
          <ServiceCard
            key={card.id}
            img={card.img}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
