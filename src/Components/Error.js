import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.error(err);

  return (
    <div>
      <h2>{err.data}</h2>
      <h3>{err.statusText}</h3>
    </div>
  );
};

export default Error;
