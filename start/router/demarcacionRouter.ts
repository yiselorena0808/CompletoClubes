import Route from '@adonisjs/core/services/router'
import DemarcacionController from '../../app/controllers/DemarcacionController.js'

const demarcacion = new DemarcacionController()

Route.get('/demarcaciones', demarcacion.listar)
Route.get('/demarcaciones/:cod_dem', demarcacion.listarId)
Route.put('/demarcaciones/:cod_dem', demarcacion.actualizar)
Route.post('/demarcaciones', demarcacion.crear)
Route.delete('/demarcaciones/:cod_dem', demarcacion.eliminar)
