import React from 'react';
import { Link } from 'react-router-dom'
import './pokemon.css';

class Pokemon extends React.Component {
  render() {
    const {name, type, avgWeight, image, id } = this.props.pokemon;
    return (
      <>
        <div className="pokemon">
          <div>
            <p>{name}</p>
            <p>{type}</p>
            <p>
              Average weight: {`${avgWeight.value} ${avgWeight.unit}`}
            </p>
          </div>
          <img src={image} alt={`${name} sprite`} />
        </div>
        <Link to={`pokemon/${id}`}>{`${name} Details`}</Link>
      </>
    );
  }
}

export default Pokemon;