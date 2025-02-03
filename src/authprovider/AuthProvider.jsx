import { createContext } from "react";

export const AssetContext = createContext(null);

const AuthProvider = ({ children }) => {
  const allValue = {
    name: "do it",
  };

  return (
    <AssetContext.Provider value={allValue}>{children}</AssetContext.Provider>
  );
};

export default AuthProvider;
