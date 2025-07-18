import JugadorService from '../service/JugadorService.ts'

export default class JugadorController {
  private service = new JugadorService()

  async crearJugador({ request, response }) {
    try {
      const { club, jugador, dorsal, CodPais, cod_dem } = request.body()
      const nuevo = await this.service.crear({ club, jugador, dorsal, CodPais, cod_dem })
      return response.json({ msj: 'Jugador creado', datos: nuevo })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }

  async listarJugadores({ response }) {
    try {
      console.log('SERVICE:', this.service)
      const lista = await this.service.listar()
      return response.json({ datos: lista })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }

  async jugadorPorId({ params, response }) {
    try {
      const { CodJug } = params
      const resultado = await this.service.listarId(CodJug)
      return response.json({ datos: resultado })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }

  async actualizarJugador({ params, request, response }) {
    try {
      const CodJug = params.CodJug
      const { club, jugador, dorsal, CodPais, cod_dem } = request.body()
      const actualizado = await this.service.actualizar(CodJug, { club, jugador, dorsal, CodPais, cod_dem })
      return response.json({ msj: actualizado })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }

  async eliminarJugador({ params, response }) {
    try {
      const CodJug = params.CodJug
      const eliminado = await this.service.eliminar(CodJug)
      return response.json({ msj: eliminado })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }
  async listarPorPais({ params, response }) {
    try {
      const data = await this.service.listarPorPaisOrdenado(Number(params.id))
      return response.json(data)
    } catch (error) {
      console.log('Error en listarPorPais:', error)
      return response.status(500).json({ error: error.message })
    }
  }

}

