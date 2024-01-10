import { Component } from "react";
import './card-list.styles.css';
import Card from "../card/card.component";

const CardList = ({pokemons}) => {
    return (
        <div className="card-list">
            {
                pokemons.map((pokemon)=>{
                    const pokeid = pokemon.url.substring(34,pokemon.url.length-1);
                    const pokename = pokemon.name;
                    return <Card pokeid={pokeid} pokename={pokename}/>;
                })
            }
        </div>
    )
}

export default CardList;