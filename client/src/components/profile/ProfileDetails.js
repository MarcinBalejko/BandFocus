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
  const details = (
    <tr>
      <td>
        {favbands.length > 0 ? (
          <Fragment>
            <div className="fav-bands-container">
              {favbands.map((band, index) =>
                band === favbands[favbands.length - 1] ? (
                  <span key={index}>{band}</span>
                ) : (
                  <span key={index}>{band},</span>
                )
              )}
            </div>
          </Fragment>
        ) : (
          <h4>No details yet</h4>
        )}
      </td>
      <td>
        {favgenres.length > 0 ? (
          <Fragment>
            <div className="fav-genres-container">
              {favgenres.map((genre, index) =>
                genre === favgenres[favgenres.length - 1] ? (
                  <span key={index}>{genre}</span>
                ) : (
                  <span key={index}>{genre},</span>
                )
              )}
            </div>
          </Fragment>
        ) : (
          <h4>No details yet</h4>
        )}
      </td>
      <td>
        {setup.length > 0 ? (
          <Fragment>
            <div className="current-setup-container">
              {setup.map((set, index) =>
                set === setup[setup.length - 1] ? (
                  <span key={index}>{set}</span>
                ) : (
                  <span key={index}>{set},</span>
                )
              )}
            </div>
          </Fragment>
        ) : (
          <></>
        )}
      </td>
    </tr>
  );
  return (
    <Fragment>
      <div className="table-details-grid">
        <h2 className="my-2">{name.trim().split(" ")[0]}'s Details</h2>
        <table className="table table-details">
          <thead>
            <tr>
              <th>
                Favourite Bands &nbsp;
                <i className="fas fa-thumbs-up text-primary" />
              </th>
              <th>
                Favourite Genres &nbsp;
                <i className="fab fa-itunes-note text-primary" />
              </th>
              <th>
                Current Setup &nbsp;
                <i className="fas fa-sliders-h text-primary" />
              </th>
              <th />
            </tr>
          </thead>
          <tbody>{details}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
