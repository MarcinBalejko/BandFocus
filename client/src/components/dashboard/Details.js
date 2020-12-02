import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";
import { connect } from "react-redux";
import { deleteDetails } from "../../actions/profile";

const Details = ({ details, deleteDetails }) => {
  const userdetails = details.map((det) => (
    <tr key={det._id}>
      <td>{det.favgenres}</td>
      <td className="hide-sm">{det.favbands}</td>
      <td className="hide-sm">{det.setup}</td>
      <td className="hide-sm">{det.uservideo}</td>
      <td>
        <button
          onClick={() => deleteDetails(det._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Favourite music genres</th>
            <th className="hide-sm">Favourite bands</th>
            <th className="hide-sm">Setup</th>
            <th className="hide-sm">Video</th>
          </tr>
        </thead>
        <tbody>{userdetails}</tbody>
      </table>
    </Fragment>
  );
};

Details.propTypes = {
  details: PropTypes.array.isRequired,
  deleteDetails: PropTypes.func.isRequired,
};

export default connect(null, { deleteDetails })(Details);
