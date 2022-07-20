import { AuthResponse } from "../models/AuthResponse";
import IUserCreate from "../models/IUserCreate";

class AuthService {
  private readonly baseUrl = "http://192.168.31.245:8080/api";
  private readonly baseHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  login = async (email: string, password: string): Promise<AuthResponse> => {
    try {
      const res: AuthResponse = await fetch(this.baseUrl + "/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }).then(r => r.json());
      console.log("AUTH", res);
      return res;
    } catch (error) {
      console.log("AUTH ERROR", error);
    }
    return Promise.reject();
  };

  logout = async (email: string, password: string) => {
    try {
      const res: AuthResponse = await fetch(
        "http://192.168.31.245:8080/api/logout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        },
      ).then(r => r.json());
      return res;
    } catch (error) {
      console.log("AUTH ERROR", error);
    }
    return Promise.reject();
  };

  register = async (data: IUserCreate): Promise<AuthResponse> => {
    console.log("log", JSON.stringify(data));
    console.log("log", data);
    try {
      const response: AuthResponse = await fetch(
        this.baseUrl + "/registration",
        {
          method: "POST",
          headers: { ...this.baseHeaders },
          body: JSON.stringify(data),
        },
      ).then(res => res.json());
      console.log("response", response);
      return response;
    } catch (error) {
      console.log("Error", error);
    }
    return Promise.reject();
  };

  refresh = async () => {
    try {
      const response = await fetch(this.baseUrl + "/register", {
        method: "POST",
        headers: { ...this.baseHeaders },
      }).then(res => res.json());

      return response;
    } catch (error) {
      console.log(error);
    }
  };
}

export default AuthService;
