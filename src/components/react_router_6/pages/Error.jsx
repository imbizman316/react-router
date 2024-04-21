import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h3>The following error occured.</h3>
      <h4>Reason: {error.message}</h4>
      <h4>Status: {error.status}</h4>
    </div>
  );
}

export default Error;
