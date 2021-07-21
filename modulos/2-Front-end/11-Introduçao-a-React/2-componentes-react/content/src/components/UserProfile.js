import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
  render() {
    return (
      <div>
        <p> {this.props.name} </p>
        <p> {this.props.email} </p>
        <Image source={this.props.avatar} alternativeText="User avatar" />
      </div>
    );
  }
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
}

export default UserProfile;