import Route from '@adonisjs/core/services/router'
import EntrenadorController from '#controllers/EntrenadorController'

const entrenador = new EntrenadorController()

Route.post('/entrenadores', entrenador.crear)
Route.delete('/entrenadores/:CodEntrenador', entrenador.eliminar)
Route.get('/entrenadores', entrenador.listar)
Route.get('/entrenadores/:CodEntrenador', entrenador.listarId)
Route.put('/entrenadores/:CodEntrenador', entrenador.actualizar)
