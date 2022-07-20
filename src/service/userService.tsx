import HttpService from "./httpService";

class UserService extends HttpService {
  getCurrentUser = async () => {
    return this.get("/me");
  };
}

export default UserService;
