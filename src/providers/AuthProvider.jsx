import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../utils/firebase.config";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const auth = getAuth(app);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        setLoading(true);
        const loggedUser = res.user;
        setUser(loggedUser);
      })
      .catch((err) => console.log(err));
  };
  const provider = new GoogleAuthProvider();
  const popUpGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .then((res) => {
        const loggedUser = res.user;
        setUser(loggedUser);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    createUser,
    popUpGoogle,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
