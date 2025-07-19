import Route from '@adonisjs/core/services/router'
import JugadorController from '../../app/controllers/JugadorController.ts'

const jugador = new JugadorController()

Route.get('/jugadores',jugador.listarJugadores);
Route.post('/jugadores', jugador.crearJugador);
Route.get('/jugadores/:CodJug',jugador.jugadorPorId);
Route.put('/jugadores/:CodJug',jugador.actualizarJugador);
Route.delete('/jugadores/:CodJug',jugador.eliminarJugador);
Route.get('/jugadores/pais/:id',jugador.listarPorPais);
Route.get('/jugadores/detallado', jugador.listarConClubYPais);
Route.get('/jugadores/estadisticas',jugador.estadisticasPorClub);
Route.get('/jugadores/relaciones',jugador.listarConRelaciones);
Route.get('/jugadores/nombre-dorsal',jugador.jugadoresNombreYDorsal);
Route.get('jugadores/paginado',jugador.paginacion);







