import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Paise from './paise.ts'
import Demarcacion from './demarcacion.ts'

export default class Jugador extends BaseModel {
  @column({ isPrimary: true, columnName:'CodJug'})
  declare CodJug: number
@column()
  declare club: string
  @column()
  declare jugador: string
  @column()
  declare dorsal: number

  @column({ columnName: 'CodPais' }) 
  declare CodPais: string 

  @column({ columnName: 'cod_dem' })
  declare cod_dem: number 

 @belongsTo(() => Paise, {
    foreignKey: 'CodPais',
  })
  declare pais: BelongsTo<typeof Paise>

  @belongsTo(() => Demarcacion, {
    foreignKey: 'cod_dem',
  })
  declare demarcacion: BelongsTo<typeof Demarcacion>


  @column.dateTime({ columnName: 'created_at', autoCreate: true })
declare createdAt: DateTime

@column.dateTime({ columnName: 'updated_at', autoCreate: true, autoUpdate: true })
declare updatedAt: DateTime


}