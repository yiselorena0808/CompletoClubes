import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Campeonato from './campeonato.ts'
import Club from './club.ts' 

export default class Palmare extends BaseModel {
 @column({ isPrimary: true, columnName: 'CodClub' }) CodClub: number
  declare CodClub: number

  @column({ isPrimary: true, columnName:'CodCamp' }) CodCamp: number
  declare CodCamp: number

  @column()
  declare anio: number

  @belongsTo(() => Campeonato, { foreignKey: 'CodCamp' })
  declare campeonato: BelongsTo<typeof Campeonato>

  @belongsTo(() => Club, { foreignKey: 'CodClub' })
  declare club: BelongsTo<typeof Club>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

