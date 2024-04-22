import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  const handlePreviousPage = () => {
    navigate(-1);
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl text-center p-4">
        {error.statusText || error.message}
      </h1>
      <p></p>
      <button
        onClick={handlePreviousPage}
        className="p-4 bg-purple-700 text-white rounded-2xl text-center"
      >
        Back
      </button>
    </div>
  );
};

export default ErrorPage;
