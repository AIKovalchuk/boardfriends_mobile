import DeviceStorage from "./asyncStorage";

class SessionService {
  constructor(private readonly storage: DeviceStorage) {}

  getToken = async () => {
    return this.storage.getItem("accessToken");
  };
}

export default SessionService;
