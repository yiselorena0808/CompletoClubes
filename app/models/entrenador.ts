import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Entrenador extends BaseModel {
  @column({ isPrimary: true, columnName: 'CodEntrenador' })
  declare CodEntrenador: number

  @column()
  declare nombre: string

  @column()
  declare experiencia: string

  @column()
  declare nacionalidad: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}