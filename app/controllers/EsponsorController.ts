import EsponsorService from '../service/EsponsorService.ts'
const esponsorService = new EsponsorService()

export default class EsponsorController {
  async crear({ request, response }) {
    try {
      const { esponsor } = request.body()
      const nuevo = await esponsorService.crear({ esponsor })
      return response.json({ msj: 'Creado', data: nuevo })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listar({ response }) {
    try {
      const lista = await esponsorService.listar()
      return response.json({ data: lista })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listarId({ params, response }) {
    try {
      const item = await esponsorService.listarId(params.cod_espon)
      return response.json({ data: item })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async actualizar({ params, request, response }) {
    try {
      const data = request.body()
      const actualizado = await esponsorService.actualizar(params.cod_espon, data)
      return response.json({ data: actualizado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async eliminar({ params, response }) {
    try {
      const eliminado = await esponsorService.eliminar(params.cod_espon)
      return response.json({ msj: eliminado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}
