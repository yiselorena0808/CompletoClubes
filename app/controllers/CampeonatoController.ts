import CampeonatoService from '../service/CampeonatoService.ts'
const campeonatoService = new CampeonatoService()

export default class CampeonatoController {
  async crear({ request, response }) {
    try {
      const { NombreCamp } = request.body()
      const nuevo = await campeonatoService.crear({ NombreCamp })
      return response.json({ msj: 'Campeonato creado', datos: nuevo })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listar({ response }) {
    try {
      const lista = await campeonatoService.listar()
      return response.json({ datos: lista })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listarId({ params, response }) {
    try {
      const id = params.CodCamp
      const item = await campeonatoService.listarId(id)
      return response.json({ datos: item })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async actualizar({ params, request, response }) {
    try {
      const id = params.CodCamp
      const { NombreCamp } = request.body()
      const actualizado = await campeonatoService.actualizar(id, { NombreCamp })
      return response.json({ datos: actualizado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async eliminar({ params, response }) {
    try {
      const id = params.CodCamp
      const eliminado = await campeonatoService.eliminar(id)
      return response.json({ msj: eliminado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}
