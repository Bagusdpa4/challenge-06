import React, { useEffect, useState } from "react";
import { NavbarHome } from "../../assets/component/Header/NavbarHome";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDataMovieDetail } from "../../services/data-movie/get-data-movie-detail";
import { FaPlayCircle } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { Footer } from "../../assets/component/Header/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail } from "../../redux/action/movie/authMovie";

export const DetailMovie = () => {
  // const {movieId} = useParams();
  // const dispatch = useDispatch()
  // const [details, setdetails] = useState("");
  // // const token = CookieStorage.get(CookieKeys.AuthToken);
  // const genres = details && details.genres.map((gen) => gen.name).join(", ");

  // const getmoviedetails = async () => {
  //   dispatch(getMovieDetail(movieId))
  // };

  // useEffect(() => {
  //   getmoviedetails();
  // }, [movieId]);

  // const {detail} = useSelector((store) => store.movie)
  // console.log(detail)

  // const data = detail

  const movieId = useParams();
  const [details, setdetails] = useState("");
  const token = CookieStorage.get(CookieKeys.AuthToken);
  const genres = details && details.genres.map((gen) => gen.name).join(", ");

  const getmovie = async () => {
    const datapopular = await fetchDataMovieDetail(token, movieId);
    setdetails(datapopular.data);
  };

  useEffect(() => {
    getmovie();
  }, [movieId.movieId]);

  return (
    // Lihat Movie Detail Berdasarkan ID
    <div className="relative">
      {details && (
        <div
          className="h-[100vh] bg-cover bg-center z-0 blur-sm contrast-125"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${details.backdrop_path})`,
          }}
        ></div>
      )}

      {/* Detail Movie */}
      <div className="absolute inset-0 flex flex-col justify-center p-48 z-1">
        <div className="flex flex-col items-end">
          <div className="flex items-center justify-center">
            <img
              src={
                details?.poster_path
                  ? `https://image.tmdb.org/t/p/original/${details.poster_path}`: ""}
              alt={details?.title || ""}
              width="250px"
              height="250px"
              className="rounded-lg"/>
          </div>
        </div>

        {details && (
          <div className="absolute text-white drop-shadow-2xl  items-start ">
            <h1 className="text-6xl font-bold w-[75%]">{details.title}</h1>
            <p className="text-lg mt-6 font-semibold">{genres}</p>
            <p className="mt-6 text-base w-[40%] font-semibold">"{details.overview}"</p>
            <p className="mt-6 text-lg flex items-center gap-2 text-yellow-400 font-bold">
              <AiOutlineStar size={30}/>
              {details.vote_average.toFixed(1)} / 10.0
            </p>
            <button className="flex items-center gap-2 px-2 py-2 bg-red-500 text-white rounded-full mt-6 border border-1 hover:bg-red-600"
            >
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
