import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../actions/profile";

const AddExperience = (props) => {
  const [formData, setFormData] = useState({
    band: "",
    role: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  return (
    <Fragment>
      <h1 class="large text-primary">Add An Experience</h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any bands that you have played in
        in the past
      </p>
      <small>* = required field</small>
      <form class="form">
        <div class="form-group">
          <input
            type="text"
            placeholder="* Your role in the band"
            name="role"
            required
          />
        </div>
        <div class="form-group">
          <input type="text" placeholder="* Band" name="band" required />
        </div>
        <div class="form-group">
          <input type="text" placeholder="Location" name="location" />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input type="date" name="from" />
        </div>
        <div class="form-group">
          <p>
            <input type="checkbox" name="current" value="" /> Current Band
          </p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input type="date" name="to" />
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(withRouter(AddExperience));
