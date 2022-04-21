import { useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
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
    signInWithPopup(auth, googleProvider)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error.code));
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
  return {
    signInUsingGoogle,
    user,
    error,
    setUser,
    logOut,
    adminUser,
    setAdminUser,
  };
};
export default useFirebase;
