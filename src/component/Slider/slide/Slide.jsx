import React from "react";
import SlideTitle from "./SlideTitle";
import SlideImage from "./SlideImage";

import "../../../scss/_slider.scss";

export default function Slide({ data: { url, title } }) {
  return (
    <div className="slide">
      <SlideImage src={url} alt={title} />
      <SlideTitle title={title} />
    </div>
  );
}