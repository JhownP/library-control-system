'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LivroSchema extends Schema {
  up () {
    this.create('livro', (table) => {
      table.increments()
      table.string('tutle', 200).notNullable()
      table.integer('quantity').notNullable()
      table.text('photo')
      table.timestamps()
    })
  }

  down () {
    this.drop('livro')
  }
}

module.exports = LivroSchema
