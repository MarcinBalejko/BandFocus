import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import moment from "moment";

const ProfileDetails = ({
  Details: { favgenres, favbands, setup, uservideo },
}) => (
  <div>
    {/* <h3 className="text-dark">{school}</h3> */}
    <p>{/* <strong>Degree: </strong> {degree} */}</p>
    <p>{/* <strong>Field Of Study: </strong> {fieldofstudy} */}</p>
    <p>{/* <strong>Description: </strong> {description} */}</p>
  </div>
);

ProfileDetails.propTypes = {
  Details: PropTypes.object.isRequired,
};

export default ProfileDetails;
