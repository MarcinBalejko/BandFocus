import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
    <div className="dash-buttons">
      <Link to="/edit-profile" className="btn btn-light">
        <i className="fas fa-user-circle text-primary" /> Edit Profile
      </Link>
      <Link to="/add-experience" className="btn btn-light">
        <i className="fab fas fa-history text-primary" /> Add Experience
      </Link>
      <Link to="/add-details" className="btn btn-light">
        <i className="fas fa-info-circle text-primary" /> Add Details
      </Link>
    </div>
  );
};

export default DashboardActions;
