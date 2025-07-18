import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'palmares'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('CodClub').unsigned().notNullable().references('CodClub').inTable('clubes').onDelete('CASCADE')
      table.integer('CodCamp').unsigned().notNullable().references('CodCamp').inTable('campeonato').onDelete('CASCADE')
      table.integer('anio').notNullable()
      table.primary(['CodClub', 'CodCamp'])
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
