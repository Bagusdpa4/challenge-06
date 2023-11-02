import React, { useState } from "react";
import { AiOutlineMail, AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../../assets/component/Google/GoogleLogin";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/action/login/authLogin";

export const Login = () => {
  const navigate = useNavigate();
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e) {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };
}
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    const login = await dispatch(LoginUser({
      email: Email,
      password: Password,
    }));
    if (login) {
      navigate("/")
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg h-screen">
      <div className="px-16 py-10 bg-white rounded-lg">
        <h1 className="text-4xl font-bold pb-10 text-center">LOGIN</h1>
        <div className="flex flex-col items-center relative">
          <h1 className="text-lg font-normal text-left w-96">Email :</h1>
          <input placeholder="Email Address" onChange={handleInput} className="border-2 border-black w-96 py-2 px-2 rounded text-center" value={Email} id="email" type="email" />
          <AiOutlineMail className="absolute right-3 top-10 text-black" size={20} />

          <h1 className="text-lg font-normal pt-8 text-left w-96">Password :</h1>
          <input placeholder="Password" onChange={handleInput} className="border-2 border-black w-96 py-2 px-2 rounded text-center" value={Password} id="password" type={showPassword ? "text" : "password"} />
          {showPassword ? (
            <AiFillEye className="absolute right-3 top-36 text-black cursor-pointer" size={20} onClick={handleShowPassword} />
          ) : (
            <AiFillEyeInvisible className="absolute right-3 top-36 text-black cursor-pointer" size={20} onClick={handleShowPassword} />
          )}
        </div>
        <div className="py-4 flex flex-col">
          <button
            type="button"
            className="px-9 py-2 bg-black text-white rounded-lg mt-2 w-96"
            onClick={() => {
              handleLogin();
            }}
          >
            Login
          </button>

          <div className="flex justify-center items-center py-4">
            <GoogleLogin />
          </div>

          <span className="flex justify-center items-center text-black">
            Don't have an account?
            <span
              className="px-2 cursor-pointer underline underline-offset-2 font-bold"
              onClick={() => {
                navigate("/Register");
              }}
            >
              Sign Up
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
