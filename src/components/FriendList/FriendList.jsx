import PropTypes from 'prop-types';

const FriendList = props => {
  const dataToInsert = props.friends.map(({ avatar, name, isOnline, id }) => {
    return (
      <li className="friend-item" key={id} id={id}>
        <span className={isOnline ? 'online' : 'offline'}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p>{name}</p>
      </li>
    );
  });

  return (
    <section className="friends-section section">
      <div className="friends-container container">
        <ul className="friend-list list">{dataToInsert}</ul>
      </div>
    </section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    })
  ),
};


export default FriendList;
