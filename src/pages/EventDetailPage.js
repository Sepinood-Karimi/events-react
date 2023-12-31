import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const response = useRouteLoaderData("event-detail");
  const event = response.event;

  return <EventItem event={event} />;
};

export const eventLoader = async ({ params }) => {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`);
  if (response.ok) {
    return response;
  } else {
    throw json({ message: "could not fetch event detail" }, { status: 500 });
  }
};

export const deleteEventAction = async ({ params, request }) => {
  const id = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${id}`, {
    method: request.method,
  });
  console.log(response);
  if (response.ok) {
    return redirect("/events");
  } else {
    throw json({ message: "could not fetch event detail" }, { status: 500 });
  }
};
export default EventDetailPage;
