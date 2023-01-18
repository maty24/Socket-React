//servidor de express
const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");
const cors = require("cors");

class Server {
  constructor() {
    //configuraciones globales
    this.app = express();
    this.port = 8080;

    //http server
    this.server = http.createServer(this.app);

    //configuracion del socket
    this.io = socketio(this.server);
  }

  middlewares() {
    //desplegar directorio publico
    this.app.use(express.static(path.resolve(__dirname, "../public")));

    //habilitar cors
    this.app.use(cors());
  }

  configurarSockets() {
    new Sockets(this.io); //le envio el io a la clase
  }

  execute() {
    //iniciar middlewares
    this.middlewares();
    this.configurarSockets();
    //iniciar server
    this.server.listen(this.port, () => {
      console.log("server en el puerto", this.port);
    });
  }
}

module.exports = Server;
