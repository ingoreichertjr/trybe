import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Title from './AddMovie Components/Title';
import Subtitle from './AddMovie Components/Subtitle';
import Image from './AddMovie Components/Image';
import Storyline from './AddMovie Components/Storyline';
import Rating from './AddMovie Components/Rating';
import Genre from './AddMovie Components/Genre';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange =({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleAdd = () => {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    const { handleChange, handleAdd } = this;

    return (
      <form className="add-movie" data-testid="add-movie-form">
        <div className="new-movie-info">
          <Title value={ title } onChange={ handleChange } />
          <Subtitle value={ subtitle } onChange={ handleChange } />
          <Image value={ imagePath } onChange={ handleChange } />
          <Storyline value={ storyline } onChange={ handleChange } />
          <Rating value={ rating } onChange={ handleChange } />
          <Genre value={ genre } onChange={ handleChange } />
        </div>
        <button data-testid="send-button" type="button" onClick={ handleAdd }>
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
