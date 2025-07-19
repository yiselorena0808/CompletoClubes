import Jugador from '../models/jugador.ts'
import db from '@adonisjs/lucid/services/db'


export default class JugadorService {
  async crear(datos) {
    return await Jugador.create(datos)
  }
  async listar() {
    return await Jugador.all()
  }
  async listarId(CodJug) {
    return await Jugador.find(CodJug)
  }
  async actualizar(CodJug: number, datos: { club: string, jugador: string, dorsal: number, CodPais: string, cod_dem: number }) {
    const item = await Jugador.find(CodJug)
    if (!item) return null
    item.club = datos.club
    item.jugador = datos.jugador
    item.dorsal = datos.dorsal
    item.cod_pais = datos.CodPais
    item.cod_dem = datos.cod_dem
    await item.save()
    return item
  }
  async eliminar(CodJug: number) {
    const item = await Jugador.find(CodJug)
    if (item) {
      await item.delete()
      return 'Eliminado'
    } else {
      return 'No encontrado'
    }
  }
  async listarPorPaisOrdenado(CodPais: number) {
    return await Jugador.query()
      .where('CodPais', CodPais)
      .orderBy('jugador', 'asc')
  }

  async listarJugadoresConClubYPais() {
  return await Jugador.query()
    .leftJoin('paises', 'jugadors.CodPais', 'paises.CodPais')
    .select(
      'jugadors.jugador',
      'jugadors.club',
      'paises.NombrePais as pais_nombre'
    )
}
  async listarJugadoresConRelaciones() {
  return await Jugador.query()
    .preload('pais')          
    .preload('demarcacion')   
}
async listarNombreYDorsal() {
  return await Jugador.query()
    .select('jugador', 'dorsal') 
}
async paginarJugadores(page:number,limit:number){
  return await Jugador.query()
  .select('jugador','club','dorsal')
  .orderBy('jugador','asc')
  .paginate(page,limit)
}
async contarPorClub() {
  return await db.from('jugadors')
    .select('club')  // Selecciona el club
    .count('* as total_jugadores')  // Cuenta el total de jugadores por club
    .avg('partidos_jugados as promedio_partidos')  // Promedio de partidos jugados por jugador
    .groupBy('club')  // Agrupa por club
}



}



}
