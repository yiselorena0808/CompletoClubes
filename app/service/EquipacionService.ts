import Equipacion from '../models/equipacion.ts'

export default class EquipacionService {
  async crear(datos) {
    return await Equipacion.create(datos)
  }

  async listar() {
    return await Equipacion.all()
  }

  async listarId(cod_equip: number) {
    return await Equipacion.find(cod_equip)
  }

  async actualizar(cod_equip: number, datos: { encasa: boolean }) {
    const item = await Equipacion.find(cod_equip)
    if (!item) return null
    item.encasa = datos.encasa
    await item.save()
    return item
  }

  async eliminar(cod_equip: number) {
    const item = await Equipacion.find(cod_equip)
    if (!item) return 'No encontrado'
    await item.delete()
    return 'Eliminado'
  }
}
