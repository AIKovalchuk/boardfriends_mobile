import React from "react";
import DeviceStorage from "../service/asyncStorage";
import AuthService from "../service/authService";
import SessionService from "../service/session";
import UserService from "../service/userService";

interface IServiceContext {
  userService: UserService;
  authService: AuthService;
  sessionService: SessionService;
}

const ServiceContext = React.createContext<IServiceContext>({
  sessionService: {} as SessionService,
  authService: {} as AuthService,
  userService: {} as UserService,
});

const ServiceProvider: React.FC = ({ children }) => {
  const deviceStorage = new DeviceStorage();
  const sessionService = new SessionService(deviceStorage);
  const services = React.useMemo(
    () => ({
      authService: new AuthService(sessionService),
      userService: new UserService(sessionService),
    }),
    [sessionService],
  );

  return (
    <ServiceContext.Provider value={{ ...services, sessionService }}>
      {children}
    </ServiceContext.Provider>
  );
};

export default ServiceProvider;
