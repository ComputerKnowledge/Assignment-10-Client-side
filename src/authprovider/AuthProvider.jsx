import { createContext, useState } from "react";

export const Auth = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(true);
  const allValue = {
    loading,
    setLoading,
    user,
    setUser,
  };

  return <Auth.Provider value={allValue}>{children}</Auth.Provider>;
};

export default AuthProvider;
