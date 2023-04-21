import { createContext, useContext, useState, useEffect } from "react";
import {
  auth,
  googleAuthProvider,
  gitHubAuthProvider,
} from "../config/firebase";
import {
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };
  const loginWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubAuthProvider);
  };

  const loginWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateName = (user, name) => {
    return updateProfile(user, { displayName: name });
  };

  const verifyEmail = (user) => {
    return sendEmailVerification(user);
  };

  useEffect(() => {
    const unscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unscribe();
    };
  }, []);

  const value = {
    user,
    loginWithGoogle,
    loginWithGitHub,
    loginWithEmail,
    updateName,
    verifyEmail,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
