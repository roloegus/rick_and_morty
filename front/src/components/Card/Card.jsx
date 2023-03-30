//import characters from "../data";
import { Link } from "react-router-dom";
import style from "../Card/Card.module.css";
import {useDispatch, connect} from 'react-redux';
import { getFavorites, removeFavorite } from "../../redux/actions";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";

function Card({id, name, species, gender, image, onClose, myFavorites}) {

   const [isFav, setIsFav] = useState(false);
   const dispatch = useDispatch();
   
   const addFavorite = (character) => {
      axios
      .post("http://localhost:3001/rickandmorty/fav", character)
      .then((res)=>console.log("ok"))
   }

   const removeFavorite = async (id) => {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
      dispatch(getFavorites());
      alert("Eliminado con éxito");
   }

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false)
         removeFavorite(id);
      }else {
         setIsFav(true)
         addFavorite({id, name, species, gender, image})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
     
      <div  className={style.container}>
            
            {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
            )}

            <button onClick={() => onClose(id)} className={style.closeButton}>x</button>
            
               <Link to={`/detail/${id}`} >
                  <h2>{name}</h2>
               </Link>
               
                  <img src={image} alt="" />

                  <h2>Species: {species}</h2>
                  <h2>Gender: {gender}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      //addFavorite: (character) => {dispatch(addFavorite(character))},
      removeFavorite: (id) => {dispatch(removeFavorite(id))}
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);