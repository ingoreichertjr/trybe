import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Settings() {
  return (
    <h1 data-testid="settings-title">Settings</h1>
  );
}

// Settings.propTypes = {
//   props: PropTypes
// }

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = {

// }

export default connect(null, null)(Settings);
