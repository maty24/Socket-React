class Sockets {
  constructor(io) {
    //recive el io  desde la clase server
    this.io = io;
    this.socketsEvents();
  }

  socketsEvents() {
    //cuando el cliente se conecta
    this.io.on("connection", (socket) => {
      socket.on("mensaje-to-server", (data) => {
        //cuando pongo socket solo le respndo al que le envio el mensaje y si pongo io le envia a todas la personas que estan conectadas
        console.log(data);
        this.io.emit("mensaje-from-server", data);
      });

      /*
    //el primer parametro es de idenficar y el segundo es el payload
    //emit es para emitir
    socket.emit("mensaje-bienvenida", {
      mensaje: "bienvendido al server",
      fecha: new Date(),
    });
  
    //obtengo el mensaje del cliente
    socket.on('mensaje-cliente',(data)=>{
      console.log(data);
    })
    */
    });
  }
}

module.exports = Sockets;
