import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Equipacion extends BaseModel {
  @column({ isPrimary: true, columnName: 'cod_equip' })
  declare cod_equip: number

  @column({columnName:'encasa'})
  declare encasa: boolean

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}