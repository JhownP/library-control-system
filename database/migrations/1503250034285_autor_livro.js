'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AutorLivroSchema extends Schema {
  up() {
    this.create('autor_livro', (table) => {
      table.increments()
      table.integer('autor_id').unsigned().references('id').inTable('autors')
      table.integer('livro_id').unsigned().references('id').inTable('livros')
      table.timestamps()
    })
  }

  down() {
    this.drop('autor_livro')
  }
}

module.exports = AutorLivroSchema
