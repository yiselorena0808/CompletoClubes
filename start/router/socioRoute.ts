import Route from '@adonisjs/core/services/router'
import SocioController from '../../app/controllers/SocioController.ts'

const socio = new SocioController()

Route.get('/socios/:cod_socio', socio.listarId)
Route.put('/socios/:cod_socio', socio.actualizar)
Route.post('/socios', socio.crear)
Route.get('/socios', socio.listar)
Route.delete('/socios/:cod_socio', socio.eliminar)
