const Favorite = require('../DB_connection')

const deleteFav = async (req, res) => {
    const { id } = req.params;
    try {
        const character = await Favorite.findByPk(id);
        const aux = { ...character };
        await character.destroy();
        res.status(200).json(aux)
        
    } catch (error) {
        res.status(500).json(error.message)
    }

}

module.exports = deleteFav;