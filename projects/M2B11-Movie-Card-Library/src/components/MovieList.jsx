import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    // map passando o prop sem spread operator:
    const cards = movies.map((mov) => <MovieCard key={ mov.title } movie={ mov } />);

    // // map passando o prop com spread operator:
    // const cards = movies.map((mov) => <MovieCard key={ mov.title } { ...mov } />);

    return (
      <main className="movie-list">
        {cards}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
