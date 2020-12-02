import React from "react";
import PropTypes from "prop-types";

const ProfileDetails = ({
  details: { favgenres, favbands, setup, uservideo },
}) => (
  <div>
    <p>
      <strong>Favourite genres: </strong>
      {favgenres}
    </p>
    <p>
      <strong>Favourite bands: </strong>
      {favbands}
    </p>
    <p>
      <strong>Current setup: </strong>
      {setup}
    </p>
    <p>
      <strong>Video: </strong>
      {uservideo}
    </p>
  </div>
);

ProfileDetails.propTypes = {
  details: PropTypes.object.isRequired,
};

export default ProfileDetails;
