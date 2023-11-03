import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/movie/Home";
import { SearchMovie } from "../pages/movie/SearchMovie";
import { DetailMovie } from "../pages/movie/DetailMovie";
import { Register } from "../pages/auth/Register";
import { Login } from "../pages/auth/Login";
import TokenProtected from "../assets/component/protected/TokenProtected";
import { Profile } from "../pages/auth/Profile";

export const RouterMovie = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TokenProtected><Home /></TokenProtected>} />
        <Route path="/Search/:namemovie" element={<SearchMovie />} />
        <Route path="/Detail/:movieId" element={<DetailMovie />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};
