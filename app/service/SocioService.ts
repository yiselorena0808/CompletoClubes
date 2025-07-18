import Socio from '../models/socio.ts'

export default class SocioService {
  async crear(datos) {
    return await Socio.create(datos)
  }

  async listar() {
    return await Socio.all()
  }

  async listarId(cod_socio) {
    return await Socio.find(cod_socio)
  }

  async actualizar(cod_socio: number, datos) {
    const socio = await Socio.find(cod_socio)
    if (!socio) return null

    socio.codPost = datos.codPost
    socio.nombre = datos.nombre
    socio.apellido = datos.apellido
    socio.direccion = datos.direccion
    socio.provincia = datos.provincia
    socio.fechaAlta = datos.fechaAlta
    socio.cuotaActual = datos.cuotaActual
    socio.CodClub = datos.CodClub

    await socio.save()
    return socio
  }

  async eliminar(cod_socio: number) {
    const socio = await Socio.find(cod_socio)
    if (!socio) return 'No encontrado'
    await socio.delete()
    return 'Eliminado'
  }
}
