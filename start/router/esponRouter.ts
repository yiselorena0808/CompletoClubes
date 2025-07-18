import Route from '@adonisjs/core/services/router'
import EsponsorController from '#controllers/EsponsorController'

const esponsor = new EsponsorController()

Route.post('/esponsor', esponsor.crear)
Route.get('/esponsor', esponsor.listar)
Route.get('/esponsor/:cod_espon', esponsor.listarId)
Route.put('/esponsor/:cod_espon', esponsor.actualizar)
Route.delete('/esponsor/:cod_espon', esponsor.eliminar)
