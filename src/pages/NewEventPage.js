import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

const NewEventPage = () => {
  return <EventForm />;
};
export default NewEventPage;
export const addEventAction = async ({ request }) => {
  const data = await request.formData();
  const newEventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };
  const response = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      Content_Type: "application/json",
    },
    body: JSON.stringify(newEventData),
  });
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Could not add your event" }, { status: 500 });
  }
  return redirect("/events");
};
