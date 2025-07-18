import Entrenador from '../models/entrenador.ts'

export default class EntrenadorService {
  async crear(datos) {
    return await Entrenador.create(datos)
  }

  async listar() {
    return await Entrenador.all()
  }

  async listarId(CodEntrenador) {
    return await Entrenador.find(CodEntrenador)
  }

  async actualizar(CodEntrenador: number, datos: { nombre: string, experiencia: string, nacionalidad: string }) {
    const entrenador = await Entrenador.find(CodEntrenador)
    if (!entrenador) return null

    entrenador.nombre = datos.nombre
    entrenador.experiencia = datos.experiencia
    entrenador.nacionalidad = datos.nacionalidad

    await entrenador.save()
    return entrenador
  }

  async eliminar(CodEntrenador: number) {
    const entrenador = await Entrenador.find(CodEntrenador)
    if (entrenador) {
      await entrenador.delete()
      return 'Eliminado'
    } else {
      return 'No encontrado'
    }
  }
}
