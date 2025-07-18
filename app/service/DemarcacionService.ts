import Demarcacion from '../models/demarcacion.ts'

export default class DemarcacionService {
  async crear(datos) {
    return await Demarcacion.create(datos)
  }

  async listar() {
    return await Demarcacion.all()
  }

  async listarId(cod_dem) {
    return await Demarcacion.find(cod_dem)
  }

  async actualizar(cod_dem: number, datos: { demarcacion: string }) {
    const item = await Demarcacion.find(cod_dem)
    if (!item) return null
    item.demarcacion = datos.demarcacion
    await item.save()
    return item
  }

  async eliminar(cod_dem: number) {
    const item = await Demarcacion.find(cod_dem)
    if (item) {
      await item.delete()
      return 'Eliminado'
    } else {
      return 'No encontrado'
    }
  }
}
