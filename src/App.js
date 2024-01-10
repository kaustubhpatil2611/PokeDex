import './App.css';
import { Component } from 'react';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';

class App extends Component{
  constructor(){
    super();
    this.state = {
      pokemons: [],
      searchKey: ""
    }
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100',{
    mode:'cors',  
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },})
    .then((response)=>{
      return response.json()
    })
    .then((results)=>{
      this.setState(()=>{
        return {pokemons:results.results}
      }, console.log(this.state))
    })
    .catch((err)=>{
      console.error(err);
    })
  }

  onSearchPokemon = (event) => {
    const searchKey  = event.target.value.toLowerCase();
    this.setState(()=>{
      return {searchKey:searchKey}
    })
  }

  render(){
    const {pokemons, searchKey} = this.state;
    const {onSearchPokemon} = this;
    const filteredPokemons = pokemons.filter((pokemon)=>{
      return pokemon.name.toLowerCase().includes(searchKey);
    })
    return(
      <div>
        <h1 className='font-title'>PokeDex</h1>
        <SearchBox className="pokemon-search-box" placeholder="Gotta Search 'Em All!" onSearchHandler={onSearchPokemon}/>
        <CardList pokemons={filteredPokemons}/>
      </div>
    )
  }
}


export default App;