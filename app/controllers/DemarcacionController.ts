import DemarcacionService from '../service/DemarcacionService.js'

const demarcacionService = new DemarcacionService()

export default class DemarcacionController {
  async crear({ request, response }) {
    try {
      const { demarcacion } = request.body()
      const nuevo = await demarcacionService.crear({ demarcacion })
      return response.json({ msj: 'Demarcación creada', datos: nuevo })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listar({ response }) {
    try {
      const lista = await demarcacionService.listar()
      return response.json({ datos: lista })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listarId({ params, response }) {
    try {
      const { cod_dem } = params
      const item = await demarcacionService.listarId(cod_dem)
      if (!item) return response.json({ msj: 'No encontrado' })
      return response.json({ datos: item })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async actualizar({ params, request, response }) {
    try {
      const { cod_dem } = params
      const { demarcacion } = request.body()
      const actualizado = await demarcacionService.actualizar(cod_dem, { demarcacion })
      if (!actualizado) return response.json({ msj: 'No encontrado para actualizar' })
      return response.json({ msj: 'Actualizado', datos: actualizado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async eliminar({ params, response }) {
    try {
      const { cod_dem } = params
      const resultado = await demarcacionService.eliminar(cod_dem)
      return response.json({ msj: resultado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}

