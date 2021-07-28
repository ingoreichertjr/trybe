import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <label data-testid="image-input-label" htmlFor="image">
        Imagem: &nbsp;
        <input
          data-testid="image-input"
          type="text"
          name="imagePath"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Image.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Image;
