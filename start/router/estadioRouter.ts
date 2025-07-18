import Route from '@adonisjs/core/services/router'
import EstadioController from '#controllers/EstadioController'

const estadio = new EstadioController()

Route.get('/estadio', estadio.listar)
Route.post('/estadio', estadio.crear)
Route.get('/estadio/:CodEstadio', estadio.buscarPorId)
Route.put('/estadio/:CodEstadio', estadio.actualizar)
Route.delete('/estadio/:CodEstadio', estadio.eliminar)

