import EventsList from "../components/EventsList";
import { useEffect, useState } from "react";

const EventsPage = () => {
  const [fetchedEvents, setFetchedEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await fetch("http://localhost:8080/events");
      if (response.ok) {
        const responseData = await response.json();
        setFetchedEvents(responseData.events);
      }
    };
    fetchEvents();
  }, []);
  return <EventsList events={fetchedEvents} />;
};
export default EventsPage;
