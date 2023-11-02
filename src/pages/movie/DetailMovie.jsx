import React, { useEffect, useState } from "react";
import { NavbarHome } from "../../assets/component/Header/NavbarHome";
import { useParams } from "react-router-dom";
import { FaPlayCircle } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { Footer } from "../../assets/component/Header/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../redux/action/movie/authMovie";

export const DetailMovie = () => {
  const {movieId} = useParams();
  const dispatch = useDispatch()
  const [Data, setData] = useState("");
  const genres = Data && Data.genres.map((gen) => gen.name).join(", ");

  const data = useSelector((store) => store.movie.detail)

  useEffect(() => {
    const getmoviedetails = async () => {
      await dispatch(getMovieDetail(movieId));
    };
    getmoviedetails();
  }, [movieId]);

  return (
    // Lihat Movie Detail Berdasarkan ID
    <div className="relative">
      {data && (
        <div
          className="h-[100vh] bg-cover bg-center z-0 blur-sm contrast-125"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.backdrop_path})`,
          }}
        ></div>
      )}

      {/* Detail Movie */}
      <div className="absolute inset-0 flex flex-col justify-center p-48 z-1">
        <div className="flex flex-col items-end">
          <div className="flex items-center justify-center">
            <img
              src={
                data?.poster_path
                  ? `https://image.tmdb.org/t/p/original/${data.poster_path}`: ""}
              alt={data?.title || ""}
              width="250px"
              height="250px"
              className="rounded-lg"/>
          </div>
        </div>

        {data && data.vote_average && (
          <div className="absolute text-white drop-shadow-2xl  items-start ">
            <h1 className="text-6xl font-bold w-[75%]">{data.title}</h1>
            <p className="text-lg mt-6 font-semibold">{genres}</p>
            <p className="mt-6 text-base w-[40%] font-semibold">"{data.overview}"</p>
            <p className="mt-6 text-lg flex items-center gap-2 text-yellow-400 font-bold">
              <AiOutlineStar size={30}/>
              {data.vote_average.toFixed(1)} / 10.0
            </p>
            <button className="flex items-center gap-2 px-2 py-2 bg-red-500 text-white rounded-full mt-6 border border-1 hover:bg-red-600">
              <FaPlayCircle size={30} />
              WATCH TRAILER
            </button>
          </div>
        )}
      </div>
      <NavbarHome style={{ zIndex: 2 }} />
      <Footer/>
    </div>
  );
};
