import Route from '@adonisjs/core/services/router'
import PalmareController from '../../app/controllers/PalmareController.ts'

const palmare = new PalmareController()

Route.post('/palmares', palmare.crear)
Route.get('/palmares', palmare.listar)
Route.put('/palmares/:CodClub/:CodCamp', palmare.actualizar)
Route.delete('/palmares/:CodClub/:CodCamp', palmare.eliminar)
Route.get('/palmares/:CodClub/:CodCamp', palmare.listarId)
