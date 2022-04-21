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

firebaseInit();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [adminUser, setAdminUser] = useState({});
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const emailPassRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => setError(error.code));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.email) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  console.log(error);
  return {
    signInUsingGoogle,
    user,
    error,
    setError,
    setUser,
    logOut,
    adminUser,
    setAdminUser,
    emailPassRegister,
    signInWithEmailPass,
  };
};
export default useFirebase;
