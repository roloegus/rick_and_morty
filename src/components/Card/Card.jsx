//import characters from "../data";
import { Link } from "react-router-dom";
import Style from "../Card/Card.module.css";
import {connect} from 'react-redux';
import { addFavorite, removeFavorite } from "../Redux/actions";
import { useState, useEffect } from "react";

function Card({id, name, species, gender, image, onClose, addFavorite, removeFavorite, myFavorites}) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false)
         removeFavorite(id);
      }else {
         setIsFav(true)
         addFavorite(id, name, species, gender, image, onClose, addFavorite, removeFavorite)
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
     
      <div  className={Style.container}>
            
            {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
            )}

            <button onClick={() => onClose(id)} className={Style.closeButton}>x</button>
            
               <Link to={`/detail/${id}`} >
                  <h2>{name}</h2>
               </Link>
               
                  <img src={image} alt=""/>
                  <h2>Species: {species}</h2>
                  <h2>Gender: {gender}</h2>
               
            
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => {dispatch(addFavorite(character))},
      removeFavorite: (id) => {dispatch(removeFavorite(id))}
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites,
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);