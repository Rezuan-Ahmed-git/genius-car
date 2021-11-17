import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/404.jpg";

const NotFound = () => {
  return (
    <div className="text-center">
      <img src={notFound} style={{ width: "30%" }} alt="" />
      <div>
        <Link to="/" className="text-center">
          <button className="btn btn-warning">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
