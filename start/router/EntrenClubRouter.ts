import Route from '@adonisjs/core/services/router'
import EntrenClubController from '#controllers/EntrenClubController'

const controller = new EntrenClubController()

Route.post('/entrenclub', controller.crear)
Route.get('/entrenclub', controller.listar)
Route.delete('/entrenclub/:CodEntrenador/:CodClub', controller.eliminar)
