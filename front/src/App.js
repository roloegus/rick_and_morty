  //import './App.css'
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
//import style from "./App.module.css";
import Form from './components/Form/Form';
import Favorites from './components/Favorites/favorites.jsx';
import { username, password } from './utils/consts.js';

function App () {
  // hooks
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate ('/')
  }, [access])

  // event handlers
  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001";
  
    //const URL_BASE = "https://be-a-rym.up.railway.app/api";
    //const KEY = 'ea0704182a86.c45b3dbaa71b639a2fe8';

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }
    
    fetch(`${URL_BASE}/onsearch/${id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name){
        setCharacters((oldChars) => [ ...oldChars, data ]);
        //setCharacters([...characters, data]);
      } else {
        alert("No hay personajes con ese ID");
      }
    });
  };

  const onClose = (id) => {
    // filter retorna un array nuevo, no modifica el original
    setCharacters(characters.filter((char) => char.id !== id));
  };

    const login = (userData) => {
    if (userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    } else {
      alert("Datos incorrectos");
    }
  };

  // render
  return (
    
    <div>

      { pathname !== '/' && <Nav onSearch={onSearch} />}

        <Routes>
          <Route path="/" element = { <Form login={login} />} />
          <Route path="/home" element={<Cards characters={characters} onClose={onClose} /> } />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          {<Route path="/detail/:detailId" element={<Detail />} />}
        </Routes>
    </div> 
  )
}

export default App;
