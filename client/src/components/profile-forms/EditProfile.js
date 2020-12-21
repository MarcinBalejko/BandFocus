import React, { Fragment, useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile, getCurrentProfile } from "../../actions/profile";

const initialState = {
  band: "",
  location: "",
  website: "",
  bio: "",
  skills: "",
  status: "",
  favgenres: "",
  favbands: "",
  setup: "",
  uservideo: "",
  youtube: "",
  twitter: "",
  instagram: "",
  facebook: "",
  soundcloud: "",
  spotify: "",
  vimeo: "",
};

const EditProfile = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history,
}) => {
  const [formData, setFormData] = useState(initialState);

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  useEffect(() => {
    if (!profile) getCurrentProfile();
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    band,
    location,
    website,
    bio,
    skills,
    status,
    favgenres,
    favbands,
    setup,
    uservideo,
    youtube,
    twitter,
    instagram,
    facebook,
    soundcloud,
    spotify,
    vimeo,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Create Your Profile</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Let's get some information to make
          your profile stand out
        </p>
        <small>* = required field</small>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <select name="status" value={status} onChange={(e) => onChange(e)}>
              <option value="0">* Select your Status</option>
              <option value="Looking for a band">Looking for a band</option>
              <option value="Member of a band">Member of a band</option>
              <option value="Creating a band">Creating a band</option>
              <option value="Solo artist">Solo artist</option>
              <option value="Other">Other</option>
            </select>
            <small className="form-text">
              Give us an idea of where you are at in your musical career
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Band"
              name="band"
              value={band}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text">
              Could be your own band or one that you play in
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Website"
              name="website"
              value={website}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text">
              Could be your own or a band website
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text">
              City & state suggested (eg. Los Angeles, CA)
            </small>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="* Skills"
              name="skills"
              value={skills}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text">
              Please use comma separated values (eg.
              guitar,drums,vocals,bass,turntables)
            </small>
          </div>
          <div className="form-group">
            <textarea
              placeholder="A short bio of yourself"
              name="bio"
              value={bio}
              onChange={(e) => onChange(e)}
            ></textarea>
            <small className="form-text">Tell us a little about yourself</small>
          </div>

          {/* DETAILS */}

          <h3 className="medium text-primary">Add More Details</h3>
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
              placeholder="Current instrument setup"
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
              Show everyone your skills by adding a video url above
            </small>
          </div>

          <div className="my-2">
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type="button"
              className="btn btn-light"
            >
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>

          {displaySocialInputs && (
            <Fragment>
              <div className="form-group social-input">
                <i className="fab fa-twitter fa-2x"></i>
                <input
                  type="text"
                  placeholder="Twitter URL"
                  name="twitter"
                  value={twitter}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group social-input">
                <i className="fab fa-facebook fa-2x"></i>
                <input
                  type="text"
                  placeholder="Facebook URL"
                  name="facebook"
                  value={facebook}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group social-input">
                <i className="fab fa-youtube fa-2x"></i>
                <input
                  type="text"
                  placeholder="YouTube URL"
                  name="youtube"
                  value={youtube}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group social-input">
                <i className="fab fa-instagram fa-2x"></i>
                <input
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                  value={instagram}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group social-input">
                <i className="fab fa-soundcloud fa-2x"></i>
                <input
                  type="text"
                  placeholder="Soundcloud URL"
                  name="soundcloud"
                  value={soundcloud}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group social-input">
                <i className="fab fa-spotify fa-2x"></i>
                <input
                  type="text"
                  placeholder="Spotify URL"
                  name="spotify"
                  value={spotify}
                  onChange={(e) => onChange(e)}
                />
              </div>
              <div className="form-group social-input">
                <i className="fab fa-vimeo fa-2x"></i>
                <input
                  type="text"
                  placeholder="Vimeo URL"
                  name="vimeo"
                  value={vimeo}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </Fragment>
          )}

          <input type="submit" className="btn btn-primary my-1" />
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back
          </Link>
        </form>
      </section>
    </Fragment>
  );
};

EditProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(EditProfile)
);
