import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'entren_clubs'
  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('CodEntrenador').unsigned().notNullable().references('CodEntrenador').inTable('entrenadors').onDelete('CASCADE')
      table.integer('CodClub').unsigned().notNullable().references('CodClub').inTable('clubes').onDelete('CASCADE')
      table.primary(['CodEntrenador', 'CodClub'])
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
