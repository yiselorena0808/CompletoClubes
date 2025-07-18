import EntrenClubService from '../service/EntrenClubService.ts'
const service = new EntrenClubService()

export default class EntrenClubController {
  async crear({ request, response }) {
    try {
      const datos = request.body()
      const nuevo = await service.crear(datos)
      return response.json({ mensaje: 'Asociación creada', datos: nuevo })
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
      const mensaje = await service.eliminar(params.CodEntrenador, params.CodClub)
      return response.json({ mensaje })
    } catch (error) {
      return response.status(500).json({ error: error.message })
    }
  }
}
