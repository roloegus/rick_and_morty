import useCharacter from "../../hooks/useCharacter";

const Detail = () => {
    const character = useCharacter();

    // useEffect(() => {
    //     // probamos axios.. misma funcion que fetch
    //     const URL_BASE = "http://localhost:3001/rickandmorty/detail/"
    //     //const URL_BASE = "http://localhost:3001/rickandmorty";
    //     // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    //     // const KEY = 'ea0704182a86.c45b3dbaa71b639a2fe8';
    //     axios(`${URL_BASE}/character/${detailId}`).then((response) => setCharacter(response.data)
    //     // axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) => setCharacter(response.data)
    //     );
    // }, []);
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
                    <img src={character.image} alt="img" />
                </>)
                : <h3>Loading...</h3>
            }
             
        </div>
    )

}

export default Detail;