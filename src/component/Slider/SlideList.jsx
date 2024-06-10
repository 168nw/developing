import React, { useContext } from "react";
import Slide from "./slide/Slide"
import {SliderContext} from '../Slider/Slider';

import '../../scss/_slider.scss'

export default function SlideList() {
  const {slideNumber, items} = useContext(SliderContext);

  return (
    <div
    className="slide-list"
    style={{ transform: `translateX(-${slideNumber * 100}%)` }}
  >
    {items.map((slide, index) => (
      <Slide key={index} data={slide} />
    ))}
  </div>
);
}