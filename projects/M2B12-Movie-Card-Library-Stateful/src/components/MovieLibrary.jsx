import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  // Implementação do filtro melhorada com a ajuda do colega Rafhael Gomes.
  filter = () => {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    const includeText = movies.filter((mov) => (
      mov.title.toLowerCase().includes(searchText.toLowerCase())
      || mov.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || mov.storyline.toLowerCase().includes(searchText.toLowerCase())
    ));

    const bookmarked = bookmarkedOnly
      ? includeText.filter((mov) => mov.bookmarked) : includeText;

    const filteredMovies = selectedGenre !== ''
      ? bookmarked.filter((mov) => mov.genre === selectedGenre) : bookmarked;

    return filteredMovies;
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => this.filter());
  }

  addMov = (newMovie) => {
    const { movies } = this.state;

    this.setState({ movies: [...movies, newMovie] });
    // Se usar push() ou shift() direto no movies vai alterar o array original e quebrar o teste.
    // Tem que criar uma cópia do array com map ou spread e depois adicionar o novo filme nessa cópia.
  }

  render() {
    const filteredMovies = this.filter();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { handleChange, addMov } = this;
    return (
      <>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ handleChange }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ addMov } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieLibrary;
