import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="rating-input-label" htmlFor="rating">
        Avaliação: &nbsp;
        <input
          data-testid="rating-input"
          type="number"
          name="rating"
          value={ value }
          max="5"
          min="0"
          step="0.1"
          onChange={ onChange }
        />
      </label>
    );
  }
}

Rating.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Rating;
