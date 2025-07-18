import EntrenadorService from '../service/EntrenadorService.ts'
const servicio = new EntrenadorService()

export default class EntrenadorController {
  async crear({ request, response }) {
    try {
      const datos = request.body()
      const nuevo = await servicio.crear(datos)
      return response.json({ msj: 'Entrenador creado', datos: nuevo })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async listar({ response }) {
  console.log('listar')
  try {
    const lista = await servicio.listar()
    return response.json({ msj: lista })
  } catch (error) {
    console.log(' Error en listar:', error)
    return response.json({ error: error.message })
  }
}


  async listarId({ params, response }) {
    try {
      const encontrado = await servicio.listarId(params.CodEntrenador)
      return response.json({ msj: encontrado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async actualizar({ params, request, response }) {
    try {
      const datos = request.body()
      const actualizado = await servicio.actualizar(params.CodEntrenador, datos)
      return response.json({ msj: actualizado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }

  async eliminar({ params, response }) {
    try {
      const resultado = await servicio.eliminar(params.CodEntrenador)
      return response.json({ msj: resultado })
    } catch (error) {
      return response.json({ error: error.message })
    }
  }
}
