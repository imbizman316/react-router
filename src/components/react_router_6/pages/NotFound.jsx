import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notFound-container">
      <div className="notFound">
        <h3>Sorry, the page you were looking for was not found.</h3>
        <Link to="/" className="notFound-button">
          Return to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
