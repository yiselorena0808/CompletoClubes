import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'campeonato'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('CodCamp').primary()
      table.string('NombreCamp').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}