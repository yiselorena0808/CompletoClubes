import Palmare from '../models/palmare.ts'

export default class PalmareService {
  async crear(datos) {
    return await Palmare.create(datos)
  }

  async listar() {
    return await Palmare.all()
  }

  async listarId(CodClub: number, CodCamp: number) {
    return await Palmare
      .query()
      .where('CodClub', CodClub)
      .andWhere('CodCamp', CodCamp)
      .first()
  }

  async actualizar(CodClub: number, CodCamp: number, datos: { anio: number }) {
    const item = await Palmare
      .query()
      .where('CodClub', CodClub)
      .andWhere('CodCamp', CodCamp)
      .first()

    if (!item) return null

    item.anio = datos.anio
    await item.save()
    return item
  }

  async eliminar(CodClub: number, CodCamp: number) {
    const item = await Palmare
      .query()
      .where('CodClub', CodClub)
      .andWhere('CodCamp', CodCamp)
      .first()

    if (!item) return 'No encontrado'

    await item.delete()
    return 'Eliminado'
  }
}
