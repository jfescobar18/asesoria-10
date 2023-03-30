const express = require("express");
const path = require("path");

const app = express();
const puerto = 3000;

app.use("/prueba", (req, res) => {
    console.log(res, "res");
    res.send("<h1>Hola Mundo</h1>");
});

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(puerto, () => {
    console.log("Servidor inició en puerto: " + puerto);
});

// npm init
// npm i express
// npm i path
// iniciar servidor node index.js
// detener servidor Ctrl + C
// Puerto 443 reservado para páginas https
// Pueto 80 reservado para http
// npm i nodemon --save-dev
// Con nodemon no se reinicia la aplicación
// a menos que se instale una nueva dependencia
// npm run start