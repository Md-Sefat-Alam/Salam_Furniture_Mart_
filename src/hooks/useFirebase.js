import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseInit from "../firebase/firebase.init";
import axios from "axios";

firebaseInit();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth();

  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const emailPassRegister = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailPass = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        setIsAdmin(false);
      })
      .catch((error) => setError(error.code))
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setUser(user);
      } else {
        setUser({});
        setIsAdmin(false);
      }
      // setIsLoading(false);
    });
  }, []);
  useEffect(() => {
    if (user.email) {
      axios
        .get(`http://localhost:5000/isadmin/${user.email}`)
        .then((res) => {
          if (res.status === 200) {
            setIsAdmin(res.data);
          }
        })
        .catch((error) => {});
    } else {
      setIsAdmin({ isAdmin: null });
    }
  }, [user]);

  return {
    signInUsingGoogle,
    user,
    isAdmin,
    setIsAdmin,
    error,
    setError,
    setUser,
    logOut,
    emailPassRegister,
    signInWithEmailPass,
    setIsLoading,
    isLoading,
  };
};
export default useFirebase;
