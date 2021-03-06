import React, { Fragment } from "react";
import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const ProfileAbout = ({
  profile: {
    user: { name },
    uservideo,
  },
}) => {
  return (
    <div className="profile-video bg-light p-2">
      {uservideo && (
        <Fragment>
          <h2 className="text-primary">
            {name ? name.trim().split(" ")[0] : name}'s Video
          </h2>
          <div className="line"></div>
          <div id="video-frame">
            <ReactPlayer
              url={uservideo}
              controls={true}
              config={{
                youtube: {
                  playerVars: { showinfo: 1 },
                },
              }}
            />
          </div>
        </Fragment>
      )}
    </div>
  );
};

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileAbout;
