

const validation = (userData, errors, setErrors) => {
    //let errors = {};

    if (!userData.username) {
        setErrors({...errors, username: "Este campo está vacio"});
    }
    else if (userData.username.length > 35) {
        setErrors({ ...errors, username: 'No debe superar los 35 caracteres'});
    }
    else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.username)){
        setErrors({...errors, username: 'El email es invalido'});
    }
    else {
        setErrors({ ...errors, username: ""})
    }
    // password
    if (!userData.password.length < 6 || userData.password.length > 10){
        setErrors( { ...errors, password: 'La contraseña debe contener entre 6 y 10 caracteres'});
    } 
    else if (!/\d/.test(userData.password)){
        setErrors({...errors, password: 'La contraseña debe contener al menos un numero'});
    }
    else {
        setErrors({ ...errors, password: "" })
    }
}

export default validation;