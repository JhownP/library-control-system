'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AutorLivroSchema extends Schema {
  up () {
    this.create('autor-livro', (table) => {
      table.increments()
      table.integer('autor_id').unsigned().references('id').inTable('autor')
      table.integer('livro_id').unsigned().references('id').inTable('livro')
      table.timestamps()
    })
  }

  down () {
    this.drop('autor-livro')
  }
}

module.exports = AutorLivroSchema
