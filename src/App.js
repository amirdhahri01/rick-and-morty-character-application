import './App.css';
import NavBar from './Components/NavBar';
import CharacterList from './Components/CharacterList';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';
function App() {
  const [items , setItems] = useState([]);
  const [loading , setLoading]  = useState(false);
  const [query , setQuery] = useState("");
  return (
    <>
      <NavBar/>
      <SearchBar setQuery={(query) => {setQuery(query)}}/>
      <CharacterList/>
    </>
  );
}

export default App;
