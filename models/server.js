const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    //Middlewares globales
    this.middlewares();

    //rutas
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());

    //leer datos del cuerpo en formato json
    this.app.use(express.json());

    //Carpeta pública
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server online port:", this.port);
    });
  }
}

module.exports = Server;
