import React from "react";
import Slide from "./Slide";
import { useSelector, useDispatch } from "react-redux";
import slides from "../../repository/slides";

export default function Carousel() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.slidesReducer);

  return (
    <div className="carousel">
      <div className="slides">
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          console.log(state);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </div>
    </div>
  );
}
