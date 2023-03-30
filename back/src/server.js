require("dotenv").config();
const express = require("express")
const router = require("./routes")
const morgan = require("morgan")
const cors = require("cors");

// const PORT = process.env.PORT || 3001;
const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());
server.use(morgan("dev"))
server.use(cors())

server.use("/", router);

// server.use("/", router);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})



// require("dotenv").config();
// const http = require("http");
// const getCharById = require("./controllers/getCharById")
// const getCharDetail = require("./controllers/getCharDetail")

// http
//     .createServer((req, res) =>{
//         res.setHeader('Access-Control-Allow-Origin', '*');
        
//         const { url } = req;
        
//         if(url.includes("onsearch")){
//             const id = url.split("/").at(-1);
//             //console.log(id);
//             getCharById(res, id)
//         }         
//         if (url.includes("detail")){
//             const id = url.split("/").at(-1);
//             //console.log(id);
//             getCharDetail(res, id)
//         }
//     })
//     .listen(3001, "localhost");















// const http = require("http");
// const data = require("./utils/data")
// http
// .createServer(
//     (req, res)=>{
//         res.setHeader('Access-Control-Allow-Origin', '*');
        
//         const { url } = req;
//         //console.log(url);

//         if(url.includes("rickandmorty/character/")){
//             //console.log("estoy en la ruta")
//             //console.log(url);
//             const id = url.split("/").at(-1);
//             const character = data.find((char) => char.id == id);
//             //console.log(character);
//             if(character){
//                 res.writeHead(200, {"Content-Type": "application/json"})
//                 return res.end(JSON.stringify(character))
//             }else{
//                 res.writeHead(200, {"Content-Type": "application/json"})
//                 return res.end(JSON.stringify({error: "Character not found"}));
//             }

//         }
//     }
// )
// .listen(3001, "localhost");

