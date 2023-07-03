import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";

const EditEventPage = () => {
  const response = useRouteLoaderData("event-detail");
  const event = response.event;
  return <EventForm event={event} />;
};
export default EditEventPage;
