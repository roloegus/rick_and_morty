  //import './App.css'
import Detail from './components/Detail/Detail.jsx';  
import About from './components/About/About.jsx';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState, useEffect } from 'react';
//import style from "./App.module.css";
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form.jsx';
import Favorites from './components/Favorites/favorites.jsx';

function App () {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const username = 'rolandoe7@hotmail.com';
  const password = '123asd';

  const login = (userData) => {
    if (userData.username === username && userData.password === password){
      setAccess(true);
      navigate('/home');
    }
  }

  useEffect(() => {
    !access && navigate ('/')
  }, [access])

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = 'ea0704182a86.c45b3dbaa71b639a2fe8';

    if (characters.find((char) => char.id === id)){
      return alert("Personaje repetido!");
    } 

      fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
      .then(response=>response.json())
      .then(data=>{
        if (data.name ){
          setCharacters((oldChards) => [...oldChards, data]);
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

  return (
    
    <div>
      {location.pathname === '/' ? <Form login={login} /> : <Nav onSearch={onSearch} />}

      
        <Routes>
          <Route 
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/favorites" element={<Favorites />} />
          {<Route path='/detail/:detailId' element={<Detail />} />}
        </Routes>
    </div> 
  )
}

export default App;
