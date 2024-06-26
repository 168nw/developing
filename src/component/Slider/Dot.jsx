import React, { useContext } from "react";
import { SliderContext } from "./Slider";

import '../../scss/_slider.scss';

export default function Dot({ number }) {
  const { goToSlide, slideNumber } = useContext(SliderContext);

  return (
    <div
      className={`dot ${slideNumber === number ? "selected" : ""}`}
      onClick={() => goToSlide(number)}
    />
  );
}