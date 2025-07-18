import Estadio from '../models/estadio.ts'

export default class EstadioService {
  async crear(datos) {
    return await Estadio.create(datos)
  }

  async listar() {
    return await Estadio.all()
  }

  async listarId(CodEstadio) {
    return await Estadio.find(CodEstadio)
  }

  async actualizar(CodEstadio, datos) {
    const estadio = await Estadio.find(CodEstadio)
    if (!estadio) {
      throw new Error('Estadio no encontrado')
    }

    estadio.merge(datos) 
    await estadio.save()
    return estadio
  }

  async eliminar(CodEstadio) {
    const estadio = await Estadio.find(CodEstadio)
    if (!estadio) {
      return 'Estadio no encontrado'
    }

    await estadio.delete()
    return 'Estadio eliminado correctamente'
  }
}
