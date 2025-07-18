import EntrenClub from '../models/entren_club.ts'

export default class EntrenClubService {
  async crear(datos) {
    return await EntrenClub.create(datos)
  }

  async listar() {
    return await EntrenClub.all()
  }

  async listarPorClub(CodClub: number) {
    return await EntrenClub.query().where('CodClub', CodClub)
  }

  async eliminar(CodEntrenador: number, CodClub: number) {
    const item = await EntrenClub.query()
      .where('CodEntrenador', CodEntrenador)
      .where('CodClub', CodClub)
      .first()

    if (item) {
      await item.delete()
      return 'Asociación eliminada'
    } else {
      return 'No encontrada'
    }
  }
}
