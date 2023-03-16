import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const {detailId} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        // probamos axios.. misma funcion que fetch
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY = 'ea0704182a86.c45b3dbaa71b639a2fe8';
        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) => setCharacter(response.data)
        );
    }, []);
    return(
        <div>
            {
                character.name ?
                (<>
                    <h1>{character.name}</h1>
                    <h2>{character.status}</h2>
                    <h2>{character.specie}</h2>
                    <h2>{character.gender}</h2>
                    <h2>{character.origin?.name}</h2>
                    <img src={character.image} alt="" />
                </>)
                : <h3>Loading...</h3>
            }
             
        </div>
    )

}

export default Detail;