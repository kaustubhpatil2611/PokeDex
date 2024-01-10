import { Component } from "react";
import './card.styles.css';

const Card = ({pokeid, pokename}) => {
    return(
        <div className="card-container" key={pokeid}>
            <img 
                alt={pokename}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${pokeid}.gif`}
            /><br/><br/>
            <h2>{pokename.toUpperCase()}</h2>
        </div>
    )
}

export default Card;