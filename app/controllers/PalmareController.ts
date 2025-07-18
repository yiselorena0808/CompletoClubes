import PalmareService from '../service/PalmareService.js'
const palmareService = new PalmareService()

export default class PalmareController {
  async crear({ request, response }) {
    try {
      const { CodClub, CodCamp, anio } = request.body()
      const nuevo = await palmareService.crear({ CodClub, CodCamp, anio })
      return response.json({ msj: 'Palmarés creado', datos: nuevo })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listar({ response }) {
    try {
      const lista = await palmareService.listar()
      return response.json({ datos: lista })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listarId({ params, response }) {
    try {
      const { CodClub, CodCamp } = params
      const item = await palmareService.listarId(Number(CodClub), Number(CodCamp))
      return response.json({ datos: item })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async actualizar({ params, request, response }) {
    try {
      const { CodClub, CodCamp } = params
      const { anio } = request.body()
      const actualizado = await palmareService.actualizar(Number(CodClub), Number(CodCamp), { anio })
      return response.json({ datos: actualizado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async eliminar({ params, response }) {
    try {
      const { CodClub, CodCamp } = params
      const eliminado = await palmareService.eliminar(Number(CodClub), Number(CodCamp))
      return response.json({ msj: eliminado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}
