import Campeonato from '../models/campeonato.ts'

export default class CampeonatoService {
  async crear(datos) {
    return await Campeonato.create(datos)
  }

  async listar() {
    return await Campeonato.all()
  }

  async listarId(CodCamp: number) {
    return await Campeonato.find(CodCamp)
  }

  async actualizar(CodCamp: number, datos: { NombreCamp: string }) {
    const item = await Campeonato.find(CodCamp)
    if (!item) return null
    item.NombreCamp = datos.NombreCamp
    await item.save()
    return item
  }

  async eliminar(CodCamp: number) {
    const item = await Campeonato.find(CodCamp)
    if (!item) return 'No encontrado'
    await item.delete()
    return 'Eliminado'
  }
}
