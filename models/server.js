const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.authPath = "/api/auth";
    this.usuariosPath = "/api/usuarios";
    //path de categorias
    //path de productos

    //Base de datos
    this.conectarDB();

    //Middlewares globales
    this.middlewares();

    //rutas
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
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
    this.app.use(this.authPath, require("../routes/auth"));
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
    //definir acceso a rutas de categorias
    //definir acceso a rutas de productos
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server online port:", this.port);
    });
  }
}

module.exports = Server;
