'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LivroSchema extends Schema {
  up () {
    this.create('livros', (table) => {
      table.increments()
      table.string('title', 200).notNullable()
      table.integer('quantity').notNullable()
      table.text('photo')
      table.timestamps()
    })
  }

  down () {
    this.drop('livros')
  }
}

module.exports = LivroSchema
