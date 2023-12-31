import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An Error Occurred";
  let message = "Something went wrong";

  console.log("error", error);

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    title = "Not found!";
    message = "We could not find this page";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}> {message}</PageContent>
    </>
  );
};
export default ErrorPage;
