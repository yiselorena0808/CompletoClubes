import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Club extends BaseModel {
  public static table = 'clubes'
  @column({ isPrimary: true,  columnName: 'CodClub' })
  declare CodClub: number

  @column({ columnName: 'Club' })
  declare Club: string

  @column({ columnName: 'Nombre' })
  declare Nombre: string

  @column({ columnName: 'Direccion' })
  declare Direccion: string

  @column({ columnName: 'Poblacion' })
  declare Poblacion: string

  @column({ columnName: 'Provincia' })
  declare Provincia: string

  @column({ columnName: 'CodPostal' })
  declare CodPostal: string

  @column({ columnName: 'Tlfno' })
  declare Tlfno: string

  @column({ columnName: 'Colores' })
  declare Colores: string

  @column({ columnName: 'Himno' })
  declare Himno: string

  @column({ columnName: 'Fax' })
  declare Fax: string

  @column({ columnName: 'AñoFundacion' })
  declare AñoFundacion: number

  @column({ columnName: 'Presupuesto' })
  declare Presupuesto: number

  @column({ columnName: 'Presidente' })
  declare Presidente: string

  @column({ columnName: 'Vicepresidente' })
  declare Vicepresidente: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  
}