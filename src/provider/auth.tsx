import React from "react";
import { IUser } from "../models/IUser";
import IUserCreate from "../models/IUserCreate";
import deviceStorage from "../service/asyncStorage";
import AuthService from "../service/authService";

interface AuthController {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (data: IUserCreate) => Promise<void>;
  isSignIn: () => boolean;
  getUser: () => IUser | null;
}

const defaultAuthController: AuthController = {
  login: () => Promise.reject(),
  logout: () => undefined,
  register: () => Promise.reject(),
  isSignIn: () => false,
  getUser: () => null,
};

export const AuthContext = React.createContext<AuthController>(
  defaultAuthController,
);

const AuthProvider: React.FC = ({ children }) => {
  const authService = React.useMemo(() => new AuthService(), []);

  const [user, setUser] = React.useState<IUser | null>(null);

  const isSignIn = () => Boolean(user);

  const login = async (email: string, password: string) => {
    const response = await authService.login(email, password);
    deviceStorage.saveItem("accessToken", response.accessToken);
    setUser(response.user);
  };

  const logout = async () => {};

  const register = async (data: IUserCreate) => {
    const response = await authService.register(data);
    await deviceStorage.saveItem("accessToken", response.accessToken);
    setUser(response.user);
  };

  const getUser = () => user;

  React.useEffect(() => {}, []);

  const controller = {
    login,
    logout,
    register,
    isSignIn,
    getUser,
  };

  return (
    <AuthContext.Provider value={controller}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
