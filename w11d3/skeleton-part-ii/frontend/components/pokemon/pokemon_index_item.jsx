import React from 'react';
import { Link } from 'react-router-dom';

class PokemonIndexItem extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>
        <Link to="/pokemon/pokemonId">
        <span>{this.props.pokemon.id}</span>
        <img src={this.props.pokemon.imageUrl} />
        <span>{this.props.pokemon.name}</span>
        </Link>
      </li>
    )
  }  
}

export default PokemonIndexItem;