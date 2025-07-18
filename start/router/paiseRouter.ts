import  Route  from "@adonisjs/core/services/router";
import PaiseController from "../../app/controllers/PaiseController.js";

const pais = new PaiseController()

Route.post('/pais', pais.crear)
Route.get('/pais', pais.mostrar)
Route.get('/pais/:CodPais', pais.buscar)
Route.put('/pais/:CodPais', pais.actualizar)
Route.delete('/pais/:CodPais', pais.eliminar)
Route.get('/contador', pais.contar)