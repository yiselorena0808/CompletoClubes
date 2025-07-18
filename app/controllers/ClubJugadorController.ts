import ClubJugadorService from '../service/ClubJugadorService.ts'
const service = new ClubJugadorService()

export default class ClubJugadorController {
  async crear({ request, response }) {
    try {
      const datos = request.body()
      const nuevo = await service.crear(datos)
      return response.json({ mensaje: 'Relación creada', datos: nuevo })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }

  async listar({ response }) {
    try {
      const datos = await service.listar()
      return response.json(datos)
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }

  async eliminar({ params, response }) {
    try {
      const mensaje = await service.eliminar(params.CodClub, params.CodJug)
      return response.json({ mensaje })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }
}
