import Esponsor from '../models/esponsor.ts'

export default class EsponsorService {
  async crear(datos) {
    return await Esponsor.create(datos)
  }

  async listar() {
    return await Esponsor.all()
  }

  async listarId(cod_espon) {
    return await Esponsor.find(cod_espon)
  }

  async actualizar(cod_espon: number, datos: { esponsor: string }) {
    const item = await Esponsor.find(cod_espon)
    if (!item) return null
    item.esponsor = datos.esponsor
    await item.save()
    return item
  }

  async eliminar(cod_espon: number) {
    const item = await Esponsor.find(cod_espon)
    if (item) {
      await item.delete()
      return 'Eliminado'
    } else {
      return 'No encontrado'
    }
  }
}
