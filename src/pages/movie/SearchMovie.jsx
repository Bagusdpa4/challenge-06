import React, { useEffect, useState } from "react";
import { NavbarHome } from "../../assets/component/Header/NavbarHome";
import { useSearchMovieDataQuery } from "../../services/data-movie/get-data-search-movie";
import { useNavigate, useParams } from "react-router-dom";
import { BsArrowDown } from "react-icons/bs"
import { Footer } from "../../assets/component/Header/Footer";

export const SearchMovie = () => {
  const navigate = useNavigate();
  const { namemovie } = useParams();
  const [movies, setMovies] = useState([]);
  const [page, setpage] = useState(1);

  const { data: searchM, isSuccess } = useSearchMovieDataQuery({
    page: page,
    query: namemovie,
  });

  const searchMovies = async () => {
    if (searchM) {
      setMovies(searchM.data);
    }
  };
  useEffect(() => {
    searchMovies();
  }, [namemovie, isSuccess]);

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
