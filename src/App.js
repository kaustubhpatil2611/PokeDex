import './App.css';
import { useState, useEffect } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

const App = () => {

  const [searchKey, setSearchKey] = useState("");
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState(pokemons);

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100',{
    mode:'cors',  
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },})
    .then((response)=>{
      return response.json()
    })
    .then((result)=>{
      setPokemons(result.results)
    })
    .catch((err)=>{
      console.error(err);
    })
  },[])

  const onSearchPokemon = (event) => {
    const searchKeyString = event.target.value.toLowerCase();
    setSearchKey(searchKeyString);
  }

  useEffect(()=>{
    const newFilteredPokemons = pokemons.filter((pokemon)=>{
      return pokemon.name.toLowerCase().includes(searchKey);
    });
    setFilteredPokemons(newFilteredPokemons);
  },[pokemons, searchKey]) 

  return (
    <div>
      <h1 className='font-title'>PokeDex</h1>
      <SearchBox className="pokemon-search-box" placeholder="Gotta Search 'Em All!" onSearchHandler={onSearchPokemon}/>
      <CardList pokemons={filteredPokemons}/>
    </div>
  );
}


export default App;