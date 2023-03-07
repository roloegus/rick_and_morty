//import characters from "../data";

export default function Card(props) {
   return (
      <div>  
         <button onClick={() => window.alert("Cerrar")}>X</button>
         <h2>{props.character.name}</h2>
         <h2>{props.character.species}</h2>
         <h2>{props.character.gender}</h2>
         <img  src={props.character.image} alt="" />
         
      </div>
   );
}