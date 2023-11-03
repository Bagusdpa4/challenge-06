import React from "react";
import { MoviePopular } from "../../assets/component/Movie/MoviePopular";
import { HeaderHome } from "../../assets/component/Header/HeaderHome";
import { Footer } from "../../assets/component/Header/Footer";
import { GetMe } from "../../redux/action/login/authLogin";

export const Home = () => {
  const dataMovie = GetMe({});

  return (
    <div>
      <HeaderHome />
      <MoviePopular />
      <Footer />
    </div>
  );
};
