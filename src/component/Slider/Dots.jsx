import React, {useContext} from "react";
import {SliderContext} from './Slider';
import Dot from './Dot'

import '../../scss/_slider.scss'

export default function Dots() {
  const{slideCount} = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i=0; i < slideCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return <div className="dots">{renderDots()}</div>;
}