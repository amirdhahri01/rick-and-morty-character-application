import './App.css';
import NavBar from './Components/NavBar';
import CharacterList from './Components/CharacterList';
import SearchBar from './Components/SearchBar';
import { useEffect, useState } from 'react';
import axios from "./Helpers/api";
import Spinner from './Components/Spinner';
function App() {
  const [items , setItems] = useState([]);
  const [loading , setLoading]  = useState(true);
  const [query , setQuery] = useState("");
  useEffect(()=>{
    const fetchItems = async () => {
      const results = await axios.get(`/character?name=${query}`);
      setItems(results.data.results);
      setLoading(false);
    }
    fetchItems();
  }, [query])
  return (
    <>
      <NavBar/>
      <SearchBar setQuery={(query) => {setQuery(query)}}/>
      {loading ? Spinner :  <CharacterList items={items}/>}
    </>
  );
}

export default App;
