class TicketManager{
  constructor(){
    this.eventos=[]
    this.precioBaseDeGanacias=0
  }

  getEventos(){
    return this.eventos
  }

  agregarEvento(nombre, lugar, precio, capacidad=50,fecha=new Date()){
      precio +=precio * 0.15
      const evento_id = this.eventos.length + 1
      const participantes = []
      const evento ={
          id: evento_id,
          nombre,
          lugar,
          precio,
          capacidad,
          fecha,
          participantes
    }
    this.eventos.push(evento)
  }

  agregarUsuario(evento_id, usuario_id){
    const evento_encontrado = this.eventos.find((evento)=>evento.id === evento_id)
    if(!evento_encontrado){
      console.log("El evento con el ID entregado no existe")
      return
    }

    const participantes = evento_encontrado.participantes
    const usuarioRegistrado = participantes.includes(usuario_id)
    if(usuarioRegistrado){
      console.log("El usuario esta registrado en el evento")
      return
    }

    participantes.push(usuario_id)
    console.log("El usuario a sido registrado correctamente")
}

    ponerEventoEnGira(evento_id, nueva_localidad, nueva_fecha){
      const evento_encontrado = this.eventos.find((evento)=>evento.id === evento_id)
      if (!evento_encontrado) {
        console.log("El evento con el id proporcionado no existe")
        return
    }
      
    const evento_copiado ={...evento_encontrado}
    evento_copiado.id = this.eventos.length
    evento_copiado.lugar = nueva_localidad
    evento_copiado.fecha = nueva_fecha
    evento_copiado.participantes = []

    this.eventos.push(evento_copiado)
    console.log("El evento ha sido puesto en gira correctamente")
       
   }

}

const ticketManager = new TicketManager()

//agregar eventos
ticketManager.agregarEvento("Concierto de Rock", "Estadio", "1000", 2000, new Date("2023-09-15"))
ticketManager.agregarEvento("Concierto de Pop", "Movisar Arena", "2000", 3000, new Date("2023-10-15"))

const eventos = ticketManager.getEventos()

//agregar usuarios
ticketManager.agregarUsuario(1, "Usuario1")
ticketManager.agregarUsuario(2, "Usuario2")
ticketManager.agregarUsuario(2, "Usuario3")

//poner evento en gira
ticketManager.ponerEventoEnGira(1,"Nuevo Lugar", new Date("2024-05-10"))

//obtener eventos actuales
const eventosActualizados = ticketManager.getEventos()
console.log("eventos actualizados", eventosActualizados)
