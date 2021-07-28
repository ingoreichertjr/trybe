import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline">
        Sinopse: &nbsp;
        <input
          data-testid="storyline-input"
          type="text"
          name="storyline"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Storyline;
