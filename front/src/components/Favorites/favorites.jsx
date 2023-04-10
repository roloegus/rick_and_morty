import { useEffect  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavorites  } from "../../redux/actions";
import Card from "../Card/Card";

const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.myFavorites);
    
    useEffect(()=> {
        dispatch(getFavorites())
    }, []);

    return (
        <div>
        {
            favorites.map(({id, name, species, gender, image}) => {
                return (
                    <Card
                    
                        key={id}
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                    />
                );
            })
        }
        </div>
    )
}

export default Favorites;