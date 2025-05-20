import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import PropTypes from "prop-types";

export const Auth = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  // All states ...
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [photoURL, setPhotoURL] = useState("");

  //
  //
  // Authentication functionalities ...
  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      subscribe();
    };
  }, []);

  //
  //
  // Context API's value ...
  const allValue = {
    loading,
    setLoading,
    user,
    setUser,
    registerUser,
    loginUser,
    loginWithGoogle,
    logOutUser,
    photoURL,
    setPhotoURL,
    updateUserProfile,
  };

  return <Auth.Provider value={allValue}>{children}</Auth.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default AuthProvider;
