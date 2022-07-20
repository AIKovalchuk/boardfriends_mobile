import SessionService from "./session";

class HttpService {
  protected readonly baseUrl = "http://192.168.31.245:8080/api";
  protected readonly baseHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  constructor(private readonly sessionService: SessionService) {}

  private fetch = async (
    url: string,
    method: string,
    headers: any,
    body: any = {},
  ) => {
    const token = await this.sessionService.getToken();

    return fetch(this.baseUrl + url, {
      method,
      headers: {
        Authorization: token ? `Bearer ${token}` : undefined,
        ...this.baseHeaders,
        ...headers,
      },
      body: JSON.stringify(body),
    }).then(response => response.json());
  };

  protected get = async (url: string, headers?: any) => {
    return this.fetch(url, "GET", headers);
  };

  protected post = async (url: string, headers?: any, body: any = {}) => {
    return this.fetch(url, "POST", headers, body);
  };
}

export default HttpService;
