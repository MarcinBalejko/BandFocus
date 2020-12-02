import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addDetails } from "../../actions/profile";

const AddDetails = ({ addDetails, history }) => {
  const [formData, setFormData] = useState({
    favgenres: "",
    favbands: "",
    setup: "",
    uservideo: "",
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { favgenres, favbands, setup, uservideo } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <h1 className="large text-primary">Add Your Details</h1>
      <p className="lead">
        <i className="fas fa-info-circle" /> Tell everyone a little bit more
        about yourself
      </p>
      {/* <small>* = required field</small> */}
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addDetails(formData, history);
        }}
      >
        <div className="form-group">
          <input
            type="text"
            placeholder="Favourite music genres"
            name="favgenres"
            value={favgenres}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          {/* change required? */}
          <input
            type="text"
            placeholder="Favourite bands"
            name="favbands"
            value={favbands}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Current instrument setup (what you play on)"
            name="setup"
            value={setup}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="url"
            placeholder="Your video url"
            name="uservideo"
            value={uservideo}
            onChange={(e) => onChange(e)}
          />
          <small className="form-text">
            Show everyone your musical skills by adding a youtube video url
            above
          </small>
        </div>

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddDetails.propTypes = {
  addDetails: PropTypes.func.isRequired,
};

export default connect(null, { addDetails })(withRouter(AddDetails));
