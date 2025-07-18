import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Club from './club.ts'
import Jugador from './jugador.ts'

export default class ClubJugador extends BaseModel {
  @column({ isPrimary: true, columnName: 'CodClub' })
  declare CodClub: number

  @column({ isPrimary: true, columnName: 'CodJug' })
  declare CodJug: number

  @belongsTo(() => Club, {
    foreignKey: 'CodClub',
  })
  declare club: BelongsTo<typeof Club>

  @belongsTo(() => Jugador, {
    foreignKey: 'CodJug',
  })
  declare jugador: BelongsTo<typeof Jugador>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
