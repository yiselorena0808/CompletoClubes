import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Club from './club.ts'

export default class Socio extends BaseModel {
  @column({ isPrimary: true, columnName: 'cod_socio' })
  declare cod_socio: number

  @column({columnName:'codPost'})
  declare codPost: string

  @column({columnName:'nombre'})
  declare nombre: string

  @column({columnName:'apellido'})
  declare apellido: string

  @column({columnName:'direccion'})
  declare direccion: string

  @column({columnName:'provincia'})
  declare provincia: string

   @column({ columnName: 'fecha_alta' })
  declare fechaAlta: DateTime

  @column({ columnName: 'cuota_actual' })
  declare cuotaActual: number



  @column({ columnName: 'CodClub' })
  declare CodClub: number

  
@belongsTo(() => Club, {
    foreignKey: 'CodClub',
  })
  declare club: BelongsTo<typeof Club>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}