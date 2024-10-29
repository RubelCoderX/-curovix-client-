"use client";
import { useState } from "react"; // Import useState from React
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/", showOnMobile: false },
  { name: "About Us", href: "/#about-us", showOnMobile: true },
  { name: "Service", href: "/#service", showOnMobile: true },
  { name: "Work", href: "/#work", showOnMobile: false },
  { name: "FAQs", href: "/#faqs", showOnMobile: false },
  { name: "Contact", href: "/#contact", showOnMobile: false },
];

const MenuItem = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full md:w-auto py-2 transition cursor-pointer">
      <div className="flex sm:flex-row items-center justify-between">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onClick={() => handleClick(index)} // Set active index on click
            className={`px-[18px] py-3 ${index === activeIndex ? "bg-white rounded-md" : ""}`} // Apply active class
          >
            <div
              className={`text-[12px] font-semibold px-3 md:px-6 ${
                item.showOnMobile ? "block" : "hidden sm:block"
              } text-center`}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
