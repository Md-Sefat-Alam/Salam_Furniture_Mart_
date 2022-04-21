import { useContext } from "react";
import { AuthContext } from "../contexts/AllProviders";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
