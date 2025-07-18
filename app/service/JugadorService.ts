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


  /*Obtener jugadores por país (CodPais) ordenados por nombre
      -util cuando se quiere listar todos los jugadores de un país específico, organizados.

      .where('CodPais', CodPais): Filtra los jugadores que pertenecen a un país específico.

      .orderBy('jugador', 'asc'): Ordena alfabéticamente por el nombre del jugador.

      */

  async listarPorPaisOrdenado(CodPais: number) {
    return await Jugador.query()
      .where('CodPais', CodPais)
      .orderBy('jugador', 'asc')
  }


/*  innerJoin cuando estés seguro de que los datos
 están relacionados y necesitas solo coincidencias exactas.


 leftJoin si quieres que aparezcan todos los
 datos de la tabla principal aunque no tengan relación.
 */


  async listarJugadoresConClubYPais() {
  return await Jugador.query()
    .leftJoin('paises', 'jugadors.CodPais', 'paises.CodPais')
    .select(
      'jugadors.jugador',
      'jugadors.club', // Esto es texto, no FK
      'paises.NombrePais as pais_nombre'
    )
}



/**
   * Devuelve la cantidad total de jugadores por club
   *  y cualquier otra agregación que necesites.
   */

async contarPorClub() {
    return await db
      .from('jugadors')
      .select('club')
      .count('* as total_jugadores')
      .groupBy('club')
  }


  async listarJugadoresConRelaciones() {
  return await Jugador.query()
    .preload('pais')           // ← Eager loading de país
    .preload('demarcacion')    // ← Eager loading de demarcación
}


async listarNombreYDorsal() {
  return await Jugador.query()
    .select('jugador', 'dorsal') 

}

/*
use el modelo Jugador.

se hizo una consulta con query().

aplique .select(...) para limitar los campos a jugador y dorsal.

 evita que lucid traiga campos innecesarios como createdAt, updatedAt, CodPais
*/


async paginarJugadores(page:number,limit:number){

  return await Jugador.query()
  .select('jugador','club','dorsal')
  .orderBy('jugador','asc')
  .paginate(page,limit)
}



}
