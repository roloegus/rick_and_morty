const axios = require("axios");
const { KEY, URL } = process.env;

const getCharById = (req, res) => {
    const { id } = req.params;

    axios
    .get(`${URL}/character/${id}?key=${KEY}`)
    .then((response) => {
        const { id, name, species, image, gender } = response.data;
        res.status(200).json({ id, name, species, image, gender });
    })
    .catch((error) => {
        res.status(500).json({error: error.message})
    });
};

module.exports = getCharById;


// const KEY = 'ea0704182a86.c45b3dbaa71b639a2fe8';
// const URL = 'https://be-a-rym.up.railway.app/api';

// ? VARIABLES DE ENTORNO
// Son variables privadas. Le pertenecen al proyecto. No se exponen en el código.
// Se configuran por fuera del código de la App, en el entorno

// const successH = (response, res) => {
//     const {id, image, name, gender, species} = response.data;
//         res.writeHead(200, {"Content-Type": "application/json"})
//         res.end(JSON.stringify({id, name, gender, species, image}))
// }

// const errorH = (error, res) => {
//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end(error.message)
// }

// const getCharById = (res, id) => {
//     axios
//     .get(`${URL}/character/${id}?key=${KEY}`)
//     .then((response) => successH(response, res))
//     .catch((error) => errorH(error, res))
// }

// const getCharById = (res, id) => {
//     axios
//     .get(`${URL}/character/${id}?key=${KEY}`)
//     .then((response) => (response, res) => {
//         const {id, image, name, gender, species} = response.data;
//             res.writeHead(200, {"Content-Type": "application/json"})
//             res.end(JSON.stringify({id, image, name, gender, species}))
//     })
//     .catch((error) => (error, res) => {
//         res.writeHead(500, { "Content-Type": "text/plain" });
//         res.end(error.message)
//     })

// }


// module.exports = getCharById;

//const URL_BASE = "https://be-a-rym.up.railway.app/api";
//const KEY = 'ea0704182a86.c45b3dbaa71b639a2fe8';