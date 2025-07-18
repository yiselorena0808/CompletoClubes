import ClubJugador from '../models/club_jugador.ts'

export default class ClubJugadorService {
  async crear(datos) {
    return await ClubJugador.create(datos)
  }

  async listar() {
    return await ClubJugador.all()
  }

  async listarPorClub(CodClub: number) {
    return await ClubJugador.query().where('CodClub', CodClub)
  }

  async eliminar(CodClub: number, CodJug: number) {
    const item = await ClubJugador.query()
      .where('CodClub', CodClub)
      .where('CodJug', CodJug)
      .first()

    if (item) {
      await item.delete()
      return 'Relación eliminada'
    } else {
      return 'No encontrada'
    }
  }





  
}
