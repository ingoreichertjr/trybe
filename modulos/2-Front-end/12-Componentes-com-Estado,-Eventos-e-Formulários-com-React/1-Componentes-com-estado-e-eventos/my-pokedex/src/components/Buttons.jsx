import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './css/Buttons.css'

class Buttons extends Component {
  render() {
    const { className, onClick, status, children } = this.props
    return (
      <button className={className} onClick={onClick} disabled={status}>{children}</button>
    );
  }
}

Buttons.propTypes = {
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.bool,
  children: PropTypes.string.isRequired,
}

Buttons.propDefaults = {
  status: false,
}

export default Buttons;