import "../css/Error.css";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="error-msg">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default ErrorPage;
