import { CookieKeys, CookieStorage } from "../../../utils/cookies";
import { setToken, setUser } from "../../reducer/auth/authLogin";
import { toast } from "react-toastify";
import { reduxLoginUser } from "../../../services/auth/Login-User";
import { reduxUser } from "../../../services/auth/get-User";

export const LoginUser = (input) => async (dispatch) => {
  return reduxLoginUser(input).then((result)=>{
    CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
    dispatch(setToken(result.data.data.token))
    toast.success("Login Berhasil!")
    return true
    }).catch((err)=>{
      if (err.response) {
        if (err.response.status === 400 || err.response.status === 401) {
            toast.error(err.response.data.message);
        }
    }
    })
}

export const LogOut = (input) => (dispatch) => {
    dispatch(setToken(undefined));
    CookieStorage.remove(CookieKeys.AuthToken)
    toast.info("Logout Berhasil");
    setTimeout(() => {
      window.location.href = "/Login";
    }, 2000);
}

export const GetMe = (input) => async (dispatch) => {
  return reduxUser(input).then((result)=>{
    dispatch(setUser(result.data.data))
    }).catch((err)=>{
      if (err.response.status === 401) {
        toast.warning("Login Dulu BOSSS!!!");
        setTimeout(() => {
            window.location.href = "/Login";
        }, 2000);
    }
    })
}

