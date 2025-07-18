import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'socios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_socio').primary()
      table.string('codPost ').notNullable()
      table.string('nombre').notNullable()
      table.string('apellido').notNullable()
      table.string('direccion').notNullable()
      table.string('provincia').notNullable()
      table.date('fecha_alta').notNullable()
      table.decimal('cuota_actual',8,2).notNullable()
      table.integer('CodClub').unsigned().notNullable().references('CodClub').inTable('clubes').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }
  async down() {
    this.schema.dropTable(this.tableName)
  }
}