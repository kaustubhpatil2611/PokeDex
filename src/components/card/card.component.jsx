import { Component } from "react";
import './card.styles.css';

class Card extends Component{
    render(){
        const pokeid = this.props.pokemon;
        const pokename = this.props.pokename;
        return(
            <div className="card-container" key={pokename}>
                <img 
                    alt={pokename}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokeid}.gif`}
                />
                <div>{pokename.toUpperCase()}</div>
            </div>
        )
    }
}

export default Card;