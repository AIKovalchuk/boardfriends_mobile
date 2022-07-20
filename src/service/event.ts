import Event from "../domain/Event";
import IEventCreate from "../models/IEventCreate";

class EventService {
  private readonly baseUrl = "http://192.168.31.245:8080/api";
  private readonly baseHeaders = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  getAllEvents = async () => {
    const response: Event[] = await fetch(
      `${this.baseUrl}/events?offset=0&take=20`,
      {
        method: "GET",
        headers: { ...this.baseHeaders },
      },
    ).then(res => res.json());

    return response;
  };

  getEvent = async (id: number) => {
    const response: Event = await fetch(`${this.baseUrl}/event/${id}`, {
      method: "GET",
      headers: { ...this.baseHeaders },
    }).then(res => res.json());

    return response;
  };

  createEvent = async (data: IEventCreate) => {
    const response: Event = await fetch(`${this.baseUrl}/event`, {
      method: "POST",
      headers: { ...this.baseHeaders },
      body: JSON.stringify(data),
    }).then(res => res.json());

    return response;
  };
}

export default EventService;
