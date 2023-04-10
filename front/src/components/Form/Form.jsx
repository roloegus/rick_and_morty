import { useState } from "react";
import validation from "./validation";
import style from "../Form/Form.module.css";

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
    <form onSubmit={handleSubmit} class={style.container} >
            <h1>LOGIN</h1>
            <h2>
                <label htmlFor="username">Username: </label>
                <input 
                type="text"
                name="username"
                value={userData.username}
                onChange={handleInputChange} />
                {errors.username && <p style={{color:'red'}}> {errors.username} </p>}
            </h2>
            <h2>
                <label htmlFor="password">Password: </label>
                <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange} />
                {errors.password && <p style={{color: 'red'}} > {errors.password}</p>}
            </h2>


            <button className={style.btn} type="submit">Login</button>

            
        </form>
    )
}

export default Form;