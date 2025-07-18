import PaiseService from "../service/PaiseService.ts"
//instancia
const paisService = new PaiseService()

export default class PaiseController {
  async crear({ request, response }) {
    try {
      const { NombrePais, Comunitario } = request.body()
      const nuevo = await paisService.crear({ NombrePais, Comunitario })
      return response.json({ msj: 'País creado', datos: nuevo })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async mostrar({ response }) {
    try {
      const lista = await paisService.listar()
      return response.json({ datos: lista })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async buscar({ params, response }) {
    try {
      const { CodPais } = params
      const pais = await paisService.listarId(CodPais)
      return response.json({ datos: pais })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async actualizar({ params, request, response }) {
    try {
      const { CodPais } = params
      const { NombrePais, Comunitario } = request.body()
      const actualizado = await paisService.actualizar(CodPais, { NombrePais, Comunitario })
      return response.json({ msj: 'País actualizado', datos: actualizado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async eliminar({ params, response }) {
    try {
      const { CodPais } = params
      const eliminado = await paisService.eliminar(CodPais)
      return response.json({ msj: eliminado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async contar({ response }) {
    try {
      const total = await paisService.conteo()
      return response.json({ total })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }


}