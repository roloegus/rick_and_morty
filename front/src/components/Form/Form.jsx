import { useState } from "react";
import validation from "./validation";

const Form = ({login}) => {
    const [userData, setUserData] = useState({ 
        username: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({
        username: '', 
        password: ''
    })

    const handleInputChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        
        setUserData({
            ...userData,
            [property]: value
        })
        
        validation({
                ...userData,
                [property]: value
        }, errors, setErrors)
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // hace que no se recargue la pagina
        login(userData);
    }


    return(
        <form onSubmit={handleSubmit}>

            <label htmlFor="username">Username:</label>
            <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange} />
            {errors.username && <p style={{color:'red'}}> {errors.username} </p>}

            <label htmlFor="password">Pasword:</label>
            <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange} />
            {errors.password && <p style={{color: 'red'}} > {errors.password}</p>}

            <button type="submit">Login</button>

        </form>
    )
}

export default Form;