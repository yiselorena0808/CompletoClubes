import Route from '@adonisjs/core/services/router'
import ClubController from '../../app/controllers/ClubController.ts' // ruta válida en AdonisJS 6+

const controller = new ClubController()

Route.get('/clubes', controller.mostrar)
Route.post('/clubes', controller.crear)
Route.get('/clubes/:id', controller.clubID)
Route.put('/clubes/:id', controller.actualizar)
Route.delete('/clubes/:id', controller.eliminar)

