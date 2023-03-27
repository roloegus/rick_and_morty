require("dotenv").config();
const http = require("http");
const getCharById = require("./controllers/getCharById")
const getCharDetail = require("./controllers/getCharDetail")

http
    .createServer((req, res) =>{
        res.setHeader('Access-Control-Allow-Origin', '*');
        
        const { url } = req;
        
        if(url.includes("onsearch")){
            const id = url.split("/").at(-1);
            //console.log(id);
            getCharById(res, id)
        }         
        if (url.includes("detail")){
            const id = url.split("/").at(-1);
            //console.log(id);
            getCharDetail(res, id)
        }
    })
    .listen(3001, "localhost");















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

