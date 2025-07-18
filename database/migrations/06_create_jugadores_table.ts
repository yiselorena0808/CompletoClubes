import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'jugadors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodJug')
      table.string('club')
      table.string('jugador')
      table.integer('dorsal')
      table.integer('CodPais').notNullable().references('CodPais').inTable('paises').onDelete('CASCADE')
      table.integer('cod_dem').unsigned().notNullable().references('cod_dem').inTable('demarcacions').onDelete('CASCADE')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
