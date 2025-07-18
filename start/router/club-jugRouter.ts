import Route from '@adonisjs/core/services/router'
import ClubJugadorController from '#controllers/ClubJugadorController'

const controller = new ClubJugadorController()

Route.delete('/club-jugador/:CodClub/:CodJug', controller.eliminar)
Route.post('/club-jugador', controller.crear)
Route.get('/club-jugador', controller.listar)
