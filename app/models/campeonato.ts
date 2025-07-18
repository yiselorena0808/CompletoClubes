import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Campeonato extends BaseModel {
  public static table = 'campeonato'

  @column({ isPrimary: true, columnName: 'CodCamp' })
  declare CodCamp: number

@column({ columnName: 'NombreCamp' }) 
  declare NombreCamp: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}