import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";

function TokenProtected({ children }) {
  const navigate = useNavigate();
  const Data = useSelector((state) => state.auth)

  useEffect(() => {
    if (Data.token === undefined) {
        navigate("/Login")
    }
  }, []);

  return children;
}

export default TokenProtected;