import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

const EventsPage = () => {
  const response = useLoaderData();
  const events = response.events;

  return <EventsList events={events} />;
};

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/eventss");
  if (response.ok) {
    return response;
  }
};
export default EventsPage;
