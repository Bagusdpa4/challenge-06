import React, { useEffect } from "react";
import { RenderMovie } from "./RenderMovie";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovie } from "../../../redux/action/movie/authMovie";
import { ImFilm } from "react-icons/im"

export const MoviePopular = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const getmovie = async () => {
    dispatch(getMovie())
  };

  useEffect(() => {
      getmovie();
  }, []);

  const {popular} = useSelector((store) => store.movie)

  const data = popular

  return (
    <div className="bg-slate-800 pt-5">
      <div className="text-center px-20 pb-8 pt-6">
        <h1 className="text-red-600 text-5xl font-bold mb-4 flex justify-center gap-4 font-serif"> <ImFilm size={50}/> Popular Movie <ImFilm size={50}/> </h1>
      </div>

      <div className="flex flex-wrap justify-center items-center pb-6">
        {data?.map((value) => (
          <div
            key={value.id}
            onClick={() => {
              navigate(`/detail/${value.id}`)}}>
            <RenderMovie dataMovie={value} DataAll={data.results} />
          </div>
        ))}
      </div>
    </div>
  );
};
