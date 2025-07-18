import ClubService from '../service/ClubService.js'

const clubeservice = new ClubService()

export default class ClubController {

  async mostrar({ response }) {
    try {
      const clubes = await clubeservice.obtenerTodos()
      return response.ok(clubes)
    } catch (error) {
      return response.internalServerError({ mensaje: 'Error al obtener los clubes', error })
    }
  }

  async crear({ request, response }) {
    try {
      const data = request.only([
        'Club', 'Nombre', 'Direccion', 'Poblacion', 'Provincia',
        'CodPostal', 'Tlfno', 'Colores', 'Himno', 'Fax',
        'AñoFundacion', 'Presupuesto', 'Presidente', 'Vicepresidente'
      ])

      const nuevoClub = await clubeservice.crearClub(data)
      return response.created(nuevoClub)
    } catch (error) {
      return response.badRequest({ mensaje: 'Error al crear el club', error })
    }
  }

  async clubID({ params, response }) {
    try {
      const club = await clubeservice.buscarPorId(params.id)

      if (!club) {
        return response.notFound({ mensaje: 'Club no encontrado' })
      }

      return response.ok(club)
    } catch (error) {
      return response.internalServerError({ mensaje: 'Error al buscar el club', error })
    }
  }

  async actualizar({ params, request, response }) {
    try {
      const data = request.only([
        'Club', 'Nombre', 'Direccion', 'Poblacion', 'Provincia',
        'CodPostal', 'Tlfno', 'Colores', 'Himno', 'Fax',
        'AñoFundacion', 'Presupuesto', 'Presidente', 'Vicepresidente'
      ])

      const actualizado = await clubeservice.actualizarClub(params.id, data)

      if (!actualizado) {
        return response.notFound({ mensaje: 'Club no encontrado' })
      }

      return response.ok(actualizado)
    } catch (error) {
      return response.internalServerError({ mensaje: 'Error al actualizar el club', error })
    }
  }

  async eliminar({ params, response }) {
    try {
      const eliminado = await clubeservice.eliminarClub(params.id)

      if (!eliminado) {
        return response.notFound({ mensaje: 'Club no encontrado' })
      }

      return response.ok({ mensaje: 'Club eliminado correctamente' })
    } catch (error) {
      return response.internalServerError({ mensaje: 'Error al eliminar el club', error })
    }
  }
}
