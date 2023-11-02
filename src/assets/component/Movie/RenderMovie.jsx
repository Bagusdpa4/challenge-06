import React from "react";
import { BsArrowDown } from "react-icons/bs"

export const RenderMovie = (props) => {
  return (
    <div className="w-[16rem] h-[30rem] bg-black m-4 rounded-lg hover:scale-95 hover:cursor-pointer">
      <span className="text-center text-lg text-white flex items-center justify-center gap-1"><BsArrowDown/>SEE MOVIE DETAILS<BsArrowDown/></span>
      <img src={`https://image.tmdb.org/t/p/original/${props.dataMovie.poster_path}`} className="border-b border-t rounded" alt=""></img>
      <span className="text-center text-base text-white flex items-center justify-center pt-2">" {props.dataMovie.title} "</span>
    </div>
  );
};
