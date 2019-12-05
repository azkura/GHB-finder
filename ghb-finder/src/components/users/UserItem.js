import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { avatar_url, login, html_url, alt } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt={alt}
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>
          More
        </a>
      </div>
    </div>
  );
};

UserItem.prototypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;