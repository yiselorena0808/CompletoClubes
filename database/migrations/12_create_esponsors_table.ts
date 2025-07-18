import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'esponsors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('cod_espon').primary()
      table.string('esponsor').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}