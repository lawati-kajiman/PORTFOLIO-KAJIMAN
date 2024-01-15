import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import "./Testimonial.scss";
import { images } from "../../constants";

const brands = [
  {
    imgUrl: images.amazon,
    name: "Amazon",
  },
  {
    imgUrl: images.bolt,
    name: "Bolt",
  },
  {
    imgUrl: images.adidas,
    name: "Adidas",
  },
  {
    imgUrl: images.nb,
    name: "New balance",
  },
];

const testimonials = [
  {
    name: "Roman ojha ",
    company: "Numayou",
    imgUrl: images.kaji1,
    feedback: "This shit is good",
  },
  {
    name: "ujwal ray bhatta ",
    company: "alis",
    imgUrl: images.kaji10,
    feedback: "this look perfectly fine",
  },
  {
    name: "deepak jaiswal",
    company: "Numayou",
    imgUrl: images.kaji12,
    feedback: "I am glad he made this",
  },
  {
    name: "kajiman lawati",
    company: "Numayou",
    imgUrl: images.kaji19,
    feedback: "This is me ",
  },
  {
    name: "prafulla",
    company: "TIA",
    imgUrl: images.kaji2,
    feedback: "Bong",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              className="app__testimonial-img"
              src={testimonials[currentIndex].imgUrl}
              alt={testimonials[currentIndex].name}
            />
            <div className="app__testimonial-content">
              <p className="p-text">{testimonials[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonials.length - 1
                    : currentIndex - 1
                )
              }>
              <HiChevronLeft />
            </div>

            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonials.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }>
              <HiChevronRight />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Testimonial, "app__testimonial"),
  "testimonial",
  "app__primarybg"
);
