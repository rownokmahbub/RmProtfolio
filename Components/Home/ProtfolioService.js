import React from "react";
import { motion } from "framer-motion";
import {
  headerAnimation,
  imageAnimation,
  rightAnimation,
} from "../../styles/Animation";
import { useScroll } from "../UseScroll";
const ProtfolioService = () => {
  const [element, controls] = useScroll();
  const Categories = [
    {
      id: 1,
      title: "Research",
      text: "I will research  creative ideas and find the best solution for you.",
      image: "/Assets/research.gif",
    },
    {
      id: 2,
      title: "UI/UX Design",
      text: "I will research  creative ideas and find the best solution for you.",
      image: "/Assets/design.gif",
    },
    {
      id: 3,
      title: "Develop",
      text: "I will research  creative ideas and find the best solution for you.",
      image: "/Assets/developer.gif",
    },
  ];
  return (
    <div className="container mx-auto items-center my-10 " ref={element}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 md:px-20">
        {Categories.map((category, i) => (
          <div
            key={i}
            className=" items-center text-center px-6 py-6 rounded-2xl"
          >
            <img className="w-24 mx-auto" src={category.image} alt="" />
            <p className="text-2xl font-semibold">{category.title}</p>
            <p className="text-xl text-gray-800 pt-4 ">{category.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProtfolioService;