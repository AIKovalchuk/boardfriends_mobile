import React from "react";
import Event from "../domain/Event";
import IEventCreate from "../models/IEventCreate";
import EventService from "../service/event";

interface EventController {
  getAllEvents: () => Promise<Event[]>;
  getEvent: (id: number) => Promise<Event>;
  createEvent: (data: IEventCreate) => Promise<Event>;
}

const defaultEventController: EventController = {
  getAllEvents: () => Promise.reject(),
  getEvent: () => Promise.reject(),
  createEvent: () => Promise.reject(),
};

export const EventContext = React.createContext<EventController>(
  defaultEventController,
);

const EventProvider: React.FC = ({ children }) => {
  const eventService = React.useMemo(() => new EventService(), []);

  const getAllEvents = async () => {
    const events = await eventService.getAllEvents();
    return events;
  };

  const getEvent = async (id: number) => {
    const event = await eventService.getEvent(id);
    return event;
  };

  const createEvent = async (data: any) => {
    const events = await eventService.createEvent(data);
    return events;
  };

  const controller = { getAllEvents, getEvent, createEvent };

  return (
    <EventContext.Provider value={controller}>{children}</EventContext.Provider>
  );
};

export default EventProvider;
