import React from "react";

interface AuthController {
  login: (email: string, password: string) => void;
  logout: () => void;
  signIn: () => void;
}

const defaultAuthController: AuthController = {
  login: () => undefined,
  logout: () => undefined,
  signIn: () => undefined,
};

const AuthContext = React.createContext<AuthController>(defaultAuthController);

const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = React.useState();

  const login = (email: string, password: string) => {};

  const logout = () => {};

  const signIn = () => {};

  const controller = {
    login,
    logout,
    signIn,
  };

  return (
    <AuthContext.Provider value={controller}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
