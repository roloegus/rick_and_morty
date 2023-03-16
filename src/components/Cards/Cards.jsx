import Card from "../Card/Card";
import { CardsContainer } from "./styledComponents";
//import Styled from "./Cards.module.css"

export default function Cards({characters, onClose}) {
//    const onClose=() => window.alert('Emulamos que se cierra la card');
   return (
     <CardsContainer>
         {
            characters.map(({id, name, species, gender, image}) => {
               return (
                  <Card
                     key={id}
                     id={id}
                     name={name}
                     species={species}
                     gender={gender}
                     image={image}
                     onClose={onClose}
                  />
               )
            }
            )
         }      
      </CardsContainer>
   );
}