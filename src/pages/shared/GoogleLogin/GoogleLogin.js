import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import GoogleIcon from "@mui/icons-material/Google";

const GoogleLogin = () => {
  const { signInUsingGoogle, setUser, setError, setIsLoading } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const redirectUri = location?.state?.from || "/home";
  const handleGoogleLogin = () => {
    setIsLoading(true);
    signInUsingGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(redirectUri);
      })
      .catch((error) => setError(error.code))
      .finally(() => setIsLoading(false));
  };
  return (
    <div className="text-center my-5">
      <button
        onClick={handleGoogleLogin}
        className="border border-gray-500 bg-gray-300 shadow-inner rounded  px-5 py-1 my-4 "
      >
        <GoogleIcon className="text-red-500" /> Sign in using goole
      </button>
    </div>
  );
};

export default GoogleLogin;
