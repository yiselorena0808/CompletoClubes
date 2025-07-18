import EstadioService from "../service/EstadioService.ts"
// instancia

const estadioService = new EstadioService()

export default class EstadioController {
  async crear({ request, response }) {
    try {
      const datos = request.body()
      const nuevo = await estadioService.crear(datos)
      return response.json({ mensaje: 'Estadio creado', datos: nuevo })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listar({ response }) {
    try {
      const lista = await estadioService.listar()
      return response.json({ datos: lista })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async buscarPorId({ params, response }) {
    try {
      const estadio = await estadioService.listarId(params.CodEstadio)
      return response.json({ datos: estadio })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async actualizar({ params, request, response }) {
    try {
      const datos = request.body()
      const actualizado = await estadioService.actualizar(params.CodEstadio, datos)
      return response.json({ mensaje: 'Estadio actualizado', datos: actualizado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async eliminar({ params, response }) {
    try {
      const eliminado = await estadioService.eliminar(params.CodEstadio)
      return response.json({ mensaje: eliminado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}