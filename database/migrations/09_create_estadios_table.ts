import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'estadios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodEstadio') // PK
      table.string('Estadio').notNullable()
      table.string('Direccion').notNullable()
      table.string('CodPostal').notNullable()
      table.string('Poblacion').notNullable()
      table.string('Provincia').notNullable()
      table.integer('Capacidad').notNullable()
      table.integer('Sentados').notNullable()
      table.string('Inauguracion').notNullable()
      table.string('Dimensiones').notNullable()
      table.integer('CodClub').unsigned().references('CodClub').inTable('clubes') 
      table.timestamp('created_at')
      table.timestamp('updated_at')

    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}