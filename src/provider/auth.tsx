import React from "react";

interface AuthController {
  login: (email: string, password: string) => void;
  logout: () => void;
  signIn: () => void;
  isSignIn: () => boolean;
}

const defaultAuthController: AuthController = {
  login: () => undefined,
  logout: () => undefined,
  signIn: () => undefined,
  isSignIn: () => false,
};

export const AuthContext = React.createContext<AuthController>(
  defaultAuthController,
);

const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken] = React.useState();

  const isSignIn = () => Boolean(token);

  const login = (email: string, password: string) => {
    console.log(email, password);
  };

  const logout = () => {};

  const signIn = () => {};

  const controller = {
    login,
    logout,
    signIn,
    isSignIn,
  };

  return (
    <AuthContext.Provider value={controller}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
