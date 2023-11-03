import React, { useEffect } from "react";
import { NavbarHome } from "../../assets/component/Header/NavbarHome";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs"
import { Footer } from "../../assets/component/Header/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getMovieSearch } from "../../redux/action/movie/authMovie";

export const SearchMovie = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const { namemovie } = useParams();

  const movies = useSelector((store) => store.movie.search)

  useEffect(() => {
    dispatch(getMovieSearch(namemovie));
  }, [namemovie]);

  return (
    <div className="bg-slate-800">
      <div className="text-center px-20 border-b-2 border-red-500 pt-20">
        <h1 className="text-red-600 text-5xl font-bold mb-4 pb-4">Search Results "{namemovie}"</h1>
      </div>

      {/* menampilkan data berdasarkan inputan search */}
      {movies && (
        <div className="flex flex-wrap justify-center items-center pb-6 pt-10">
          {movies.map((movieSearch) => (
            <div
              className="w-[16rem] h-[30rem] bg-black m-4 rounded-lg hover:scale-95 hover:cursor-pointer"
              key={movieSearch.id}
              onClick={() => {
                navigate(`/detail/${movieSearch.id}`);
              }}
            >
              <span className="text-center text-lg text-white flex items-center justify-center gap-1"><BsArrowDown/>SEE MOVIE DETAILS<BsArrowDown/></span>
              <img src={`https://image.tmdb.org/t/p/w500${movieSearch.poster_path}`} alt="" className="border-b border-t rounded" />
              <span className="text-center text-base text-white flex items-center justify-center pt-2">"{movieSearch.title}"</span>
            </div>
          ))}
        </div>
      )}
      <NavbarHome style={{ zIndex: 0 }} />
      <Footer/>
    </div>
  );
};
