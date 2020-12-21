import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    favbands,
    favgenres,
    setup,
    user: { name },
  },
}) => {
  return (
    <div className="profile-details bg-white p-2">
      <h2 className="text-primary">Details</h2>
      {favbands.length > 0 ? (
        <Fragment>
          <div className="fav-bands-container">
            <p>{name.trim().split(" ")[0]}'s favourite bands:</p>
            {favbands.map((favband, index) => (
              <div key={index} className="p-1">
                <i className="fas fa-thumbs-up text-primary" /> {favband}
              </div>
            ))}
          </div>
        </Fragment>
      ) : (
        <></>
      )}
      <div className="line"></div>

      {favgenres.length > 0 ? (
        <Fragment>
          <p>{name.trim().split(" ")[0]}'s favourite music genres:</p>
          <div className="fav-genres-container">
            {favgenres.map((genre, index) => (
              <div key={index} className="p-1">
                <i className="fab fa-itunes-note text-primary" /> {genre}
              </div>
            ))}
          </div>
        </Fragment>
      ) : (
        <></>
      )}

      <div className="line"></div>

      {favbands.length > 0 ? (
        <Fragment>
          <p>{name.trim().split(" ")[0]}'s current setup:</p>
          <div className="current-setup-container">
            {setup.map((set, index) => (
              <div key={index} className="p-1">
                <i className="fas fa-sliders-h text-primary" /> {set}
              </div>
            ))}
          </div>
        </Fragment>
      ) : (
        <></>
      )}
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
