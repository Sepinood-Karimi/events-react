import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import EventDetailPage from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import NewEventPage from "./pages/NewEventPage";
import RootLayout from "./pages/layouts/RootLayout/RootLayout";
import EventsLayout from "./pages/layouts/EventsLayout/EventsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch("http://localhost:8080/events");
              if (response.ok) {
                const responseData = await response.json();
                return responseData.events;
              }
            },
          },
          { path: ":eventId", element: <EventDetailPage /> },
          { path: ":eventId/edit", element: <EditEventPage /> },
          { path: "new", element: <NewEventPage /> },
        ],
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
