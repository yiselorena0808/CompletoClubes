import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Entrenador from './entrenador.ts'
import Club from './club.ts'

export default class EntrenClub extends BaseModel {
  @column({ isPrimary: true, columnName: 'CodEntrenador' })
  declare CodEntrenador: number

  @column({ isPrimary: true, columnName: 'CodClub' })
  declare CodClub: number

  @belongsTo(() => Entrenador, { foreignKey: 'CodEntrenador' })
  declare entrenador: BelongsTo<typeof Entrenador>

  @belongsTo(() => Club, { foreignKey: 'CodClub' })
  declare club: BelongsTo<typeof Club>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
