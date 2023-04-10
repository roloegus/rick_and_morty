const {User} = require('../DB_connection')

const postUser = async ( req, res ) => {
    const { email, password} = req.body;

    if (!email || !password)
        return res.status(400).send("Faltan datos");
    
    try {
        const [user, created ] = await User.findOrCreate({
            where: {email},
            defaults: {password}});
            
        const status = created ? 201 : 200;
        res.status(status).json(user)
    } catch (error) {
        res.status(500).json(error.message)
    }

}

module.exports = postUser;