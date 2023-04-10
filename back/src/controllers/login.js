const bcrypt = require('bcrypt')
const User = require('../DB_connection');

const login = async (req, res) => {
    const { email, password } = req.query;
    if (!email || !password) return res.status(400).send("Faltan datos");
    
    try {
        const user = await User.findOne( { where: { email }})
        if (!user) return res.status(404).send("Usuario no encontrado")

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(403).send("Contraseña incorrecta")
    
        res.status(200).json({ access: true})

    } catch (error) {
        res.status(500).json(error.message)
    }

}

module.exports = login;