import Club from '../models/club.ts'

export default class ClubService {
  async obtenerTodos() {
    return await Club.all()
  }

  async crearClub(data) {
    return await Club.create(data)
  }

  async buscarPorId(id) {
    return await Club.find(id)
  }

  async actualizarClub(id, data) {
    const club = await Club.find(id)
    if (!club) return null

    club.merge(data)
    await club.save()
    return club
  }

  async eliminarClub(id) {
    const club = await Club.find(id)
    if (!club) return null

    await club.delete()
    return true
  }
}
