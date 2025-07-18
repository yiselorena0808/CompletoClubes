import EquipacionService from '../service/EquipacionService.ts'
const equipacionService = new EquipacionService()

export default class EquipacionController {
  async crear({ request, response }) {
    try {
      const { encasa } = request.body()
      const nuevo = await equipacionService.crear({ encasa })
      return response.json({ msj: 'Equipación creada', datos: nuevo })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listar({ response }) {
    try {
      const lista = await equipacionService.listar()
      return response.json({ datos: lista })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listarId({ params, response }) {
    try {
      const id = params.cod_equip
      const item = await equipacionService.listarId(id)
      return response.json({ datos: item })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async actualizar({ params, request, response }) {
    try {
      const id = params.cod_equip
      const { encasa } = request.body()
      const actualizado = await equipacionService.actualizar(id, { encasa })
      return response.json({ datos: actualizado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async eliminar({ params, response }) {
    try {
      const id = params.cod_equip
      const eliminado = await equipacionService.eliminar(id)
      return response.json({ msj: eliminado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}
