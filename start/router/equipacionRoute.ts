import Route from '@adonisjs/core/services/router'
import EquipacionController from '../../app/controllers/EquipacionController.ts'

const equipacion = new EquipacionController()

Route.post('/equipaciones', equipacion.crear)
Route.get('/equipaciones', equipacion.listar)
Route.get('/equipaciones/:cod_equip', equipacion.listarId)
Route.put('/equipaciones/:cod_equip', equipacion.actualizar)
Route.delete('/equipaciones/:cod_equip', equipacion.eliminar)
