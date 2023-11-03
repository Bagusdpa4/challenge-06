import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut } from "../../../redux/action/login/authLogin";
import { VscAccount } from "react-icons/vsc";

export const NavbarHome = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  // Fungsi untuk menangani perubahan pada input
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // handle search dengan enter setelah input movie
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter" && search.trim() !== "") {
      navigate(`/Search/${search}`);
    }
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="bg-transparent fixed top-0 flex justify-between items-center w-screen px-8 py-2 pr-16 pl-16">
      {/* Movie List Home */}
      <div className="px-2 py-3">
        <span
          className="text-red-600 text-3xl font-bold cursor-pointer hover:text-white font-serif"
          onClick={() => {
            navigate("/");
          }}
        >
          MOVIE-LIST
        </span>
      </div>

      {/* Input Search */}
      <div>
        <input
          type="text"
          placeholder="What do you want to watch?"
          className="text-center w-[50rem] py-2 rounded-3xl border-2 font-semibold text-white border border-red-600 bg-transparent dark:border-red-600 dark:placeholder-white dark:text-white hover:bg-red-600 hover:placeholder:text-white"
          value={search}
          onChange={handleInputChange}
          onKeyDown={handleEnterKeyPress}
        />
      </div>

      {/* Button Logout*/}
      <div className="px-3 mx-3 space-x-3 flex items-center relative">
        <span className="font-bold text-red-500 cursor-pointer hover:text-white">
          <VscAccount size={40} onClick={toggleDropdown} />
          {showDropdown && (
            <div className="absolute right-0 mt-4 bg-white rounded-lg shadow-md w-36">
              <div className="block text-center px-4 py-2 border-b border-black text-white bg-slate-500 ">
                !! Welcome !!
              </div>
              <span
                className="block px-4 py-2 text-center border-b border-black text-red-600 hover:bg-red-500 hover:text-white hover:rounded-lg"
                onClick={()=>{navigate("/Profile")}}
                >My Profile
              </span>
              <span
                className=" block text-center cursor-pointer px-4 py-2 text-red-500 hover:bg-red-500 hover:text-white hover:rounded-lg" 
                onClick={()=>{dispatch(LogOut())}}          
              >Logout
              </span>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};
