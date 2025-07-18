import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Esponsor extends BaseModel {
  @column({ isPrimary: true, columnName:'cod_espon' })
  declare cod_espon : number

  @column({columnName:'esponsor' })
  declare esponsor: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}