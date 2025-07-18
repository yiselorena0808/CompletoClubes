import SocioService from '../service/SocioService.js'
const socioService = new SocioService()

export default class SocioController {
  async crear({ request, response }) {
    try {
      const datos = request.body()
      const nuevo = await socioService.crear(datos)
      return response.json({ msj: 'Socio creado', datos: nuevo })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listar({ response }) {
    try {
      const lista = await socioService.listar()
      return response.json({ datos: lista })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listarId({ params, response }) {
    try {
      const item = await socioService.listarId(params.cod_socio)
      return response.json({ datos: item })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async actualizar({ params, request, response }) {
    try {
      const datos = request.body()
      const actualizado = await socioService.actualizar(params.cod_socio, datos)
      return response.json({ datos: actualizado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async eliminar({ params, response }) {
    try {
      const eliminado = await socioService.eliminar(params.cod_socio)
      return response.json({ msj: eliminado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}
