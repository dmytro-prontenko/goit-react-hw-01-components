import PropTypes from 'prop-types';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: {
    followers: profileFolowers,
    views: profileViews,
    likes: profileLikes,
  },
}) => {
  return (
    <section className="profile-section section">
      <div className="profiles-container container">
        <div className="profile-card">
          <div className="profile-info">
            <img className="profile-img" src={avatar} alt="" />
            <p className="name">{username}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
          </div>
          <ul className="stats">
            <li>
              <span className="label">Followers</span>
              <span className="quantity">{profileFolowers}</span>
            </li>
            <li>
              <span className="label">Views</span>
              <span className="quantity">{profileViews}</span>
            </li>
            <li>
              <span className="label">Likes</span>
              <span className="quantity">{profileLikes}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;
