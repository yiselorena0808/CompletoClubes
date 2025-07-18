import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clubes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {

      table.increments('CodClub') 
      table.string('Club').notNullable()
      table.string('Nombre').notNullable()
      table.string('Direccion').notNullable()
      table.string('Poblacion').notNullable()
      table.string('Provincia').notNullable()
      table.string('CodPostal').notNullable()
      table.string('Tlfno').notNullable()
      table.string('Colores').notNullable()
      table.string('Himno').notNullable()
      table.string('Fax').notNullable()
      table.integer('AñoFundacion').notNullable()
      table.decimal('Presupuesto', 15, 2).notNullable()
      table.string('Presidente').notNullable()
      table.string('Vicepresidente').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}