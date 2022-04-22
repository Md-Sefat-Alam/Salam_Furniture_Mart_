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
  const [adminUser, setAdminUser] = useState({});
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const [isAdmin, setIsAdmin] = useState(false);
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

  console.log(isAdmin);
  return {
    signInUsingGoogle,
    isAdmin,
    setIsAdmin,
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
