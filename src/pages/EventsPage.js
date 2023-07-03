import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";

const EventsPage = () => {
  const events = useLoaderData();
  return <EventsList events={events} />;
};

export const eventsLoader = async () => {
  const response = await fetch("http://localhost:8080/events");
  if (response.ok) {
    const responseData = await response.json();
    return responseData.events;
  }
};
export default EventsPage;
