import Paise from '../models/paise.ts'

export default class PaiseService {
  async crear(datos) {
    return await Paise.create(datos)
  }

  async listar() {
    return await Paise.all()
  }

  async listarId(CodPais) {
    const pais = await Paise.find(CodPais)
    return pais ?? 'País no encontrado'
  }

  async actualizar(CodPais, datos) {
    const pais = await Paise.find(CodPais)
    if (!pais) return 'No se encontró el país para actualizar'

    pais.NombrePais = datos.NombrePais
    pais.Comunitario = datos.Comunitario
    await pais.save()

    return pais
  }

  async eliminar(CodPais) {
    const pais = await Paise.find(CodPais)
    if (!pais) return 'No Eliminado'

    await pais.delete()
    return 'Eliminado'
  }

  async conteo() {
    const resultado = await Paise.query().count('* as total')
    return resultado[0].$extras.total
  }


  async paisesConJugadores(page: number, limit: number) {
  return await Paise.query()
    .preload('jugadores') // Carga todos los jugadores relacionados
    .paginate(page, limit) // Limita la cantidad de países por página
}

}
