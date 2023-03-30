const axios = require("axios");
const { KEY, URL } = process.env;

const getCharDetail = (req, res) => {
    const { id } = req.params;

    axios.get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => {
        const { id, name, species, image, gender, origin } = response.data;
        res.status(200).json({ id, name, species, image, gender, origin });
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    });
};

module.exports = getCharDetail;



// const axios = require("axios");
// const { KEY, URL } = process.env;

// const KEY = 'ea0704182a86.c45b3dbaa71b639a2fe8';
// const URL = 'https://be-a-rym.up.railway.app/api';

// const successH = (response, res) => {
//     const { name, gender, status, origin, species, image} = response.data;
//     res.writeHead(200, {"Content-Type": "application/json"})
//     res.end(JSON.stringify({ name, gender, status, origin, species, image}))
// }

// const errorH = (error, res) => {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end(error.message)
// }

// const getCharDetail = (res, id) => {
//     axios
//     .get(`${URL}/character/${id}?key=${KEY}`)
//     .then((response) => successH(response, res))
//     .catch((error) => errorH(error, res))
// }

// module.exports = getCharDetail;