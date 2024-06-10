import React from "react";

import "../../../scss/_slider.scss";

export default function SlideImage({ src, alt }) {
  return <img src={src} alt={alt} className="slide-image" />;
}